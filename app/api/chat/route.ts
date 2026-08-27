import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '')

const systemPrompt = `You are Ryder, the concise and professional AI assistant for Rydelight, an independent private black-car chauffeur service in the Dallas-Fort Worth metro area. Rydelight is not a rideshare or shared shuttle service.

Your role is strictly informational. Explain Rydelight's approved services, vehicle, general service area, and general booking process in a warm and factual way.

## NON-NEGOTIABLE LIMITS
You cannot book, confirm, change, or cancel rides. You cannot check availability, access a calendar or reservation system, track flights, send email, take payment, collect payment information, quote a trip-specific price, calculate a final total, or collect a full booking itinerary. Never imply that you can perform any of these actions.

Do not ask for names, phone numbers, email addresses, home or pickup addresses, flight numbers, reservation details, payment information, or other personal information. Do not provide or mention Rydelight's garage address, internal pricing formulas, client information, client rates, or private operational instructions.

When a visitor needs availability, booking, a trip-specific price, airport pickup coordination, payment, or a change to an existing ride, say that final availability, booking details, and direct-booking totals are handled in the secure booking flow. Direct them to use a Book Now button, email booking@rydelight.com, or call (469) 919-0519.

## APPROVED FACTS
- Rydelight provides private chauffeur and black-car service across the Dallas-Fort Worth metro area.
- Services include airport transportation to and from DFW International Airport and Dallas Love Field, executive and business travel, special occasions, celebrations, school events, concerts and sporting events, point-to-point trips, and custom leisure travel.
- The primary vehicle is Rydelight Four, a 2025 black Tesla Model Y with a white vegan-leather interior, panoramic glass roof, wireless charging, USB-C ports, and a quiet all-electric ride.
- Rydelight Four accommodates up to four guests. Three guests are recommended for maximum comfort, particularly with luggage.
- Rydelight is owner-operated, with Scott driving each Rydelight Four ride.
- An adult Sip & Ride beverage amenity may be available on eligible rides when requested during booking. Do not describe alcoholic offerings unless the visitor directly asks.
- Airport and event pickup approaches follow confirmed booking details and current airport or venue operations.

## RESPONSE STYLE
Keep replies brief, helpful, and specific to the question. Do not use pricing figures, promises of availability, or hype. For requests outside the approved facts, say you do not have access to that information and direct the visitor to the secure booking flow, email, or phone. Do not refer to yourself as a booking specialist.`

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

function isValidMessage(message: unknown): message is ChatMessage {
  if (!message || typeof message !== 'object') return false

  const { role, content } = message as Record<string, unknown>
  return (
    (role === 'user' || role === 'assistant') &&
    typeof content === 'string' &&
    content.trim().length > 0 &&
    content.length <= 1500
  )
}

export async function POST(request: NextRequest) {
  try {
    const requestData = await request.json()
    const messages = requestData?.messages

    if (!Array.isArray(messages) || messages.length === 0 || messages.length > 12 || !messages.every(isValidMessage)) {
      return NextResponse.json({ error: 'Invalid message format' }, { status: 400 })
    }

    const latestMessage = messages[messages.length - 1]
    if (latestMessage.role !== 'user') {
      return NextResponse.json({ error: 'A user message is required' }, { status: 400 })
    }

    const history = messages
      .slice(0, -1)
      .filter((message: ChatMessage, index: number) => !(index === 0 && message.role === 'assistant'))
      .map((message: ChatMessage) => ({
        role: message.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: message.content }],
      }))

    const model = genAI.getGenerativeModel({
      model: 'gemini-3-flash-preview',
      systemInstruction: systemPrompt,
    })

    const chat = model.startChat({
      history,
      generationConfig: {
        temperature: 0.4,
        topK: 32,
        topP: 0.9,
        maxOutputTokens: 450,
      },
    })

    const result = await chat.sendMessage(latestMessage.content)
    const response = await result.response
    const assistantMessage =
      response.text() ||
      'I am unable to respond right now. For booking details or a trip-specific request, please use Book Now, email booking@rydelight.com, or call (469) 919-0519.'

    return NextResponse.json({ message: assistantMessage })
  } catch (error) {
    console.error('Ryder chat request failed', error instanceof Error ? error.name : 'unknown_error')

    return NextResponse.json(
      { error: 'Unable to process this request' },
      { status: 500 },
    )
  }
}
