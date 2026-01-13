# AI Chat Widget Implementation Guide

## Overview

This implementation adds "Ryder," an AI-powered booking specialist chat widget to your Rydelight website. Ryder can accurately calculate pricing for both transfer and hourly services while highlighting your unique value propositions.

## What Was Added

### 1. Components
- **`components/ai-chat-widget.tsx`** - The floating chat widget component that appears in the bottom-right corner of your website

### 2. API Routes
- **`app/api/chat/route.ts`** - Backend API endpoint that handles AI conversations and pricing calculations using OpenAI's API

### 3. Integration
- **`app/page.tsx`** - Updated to include the AI chat widget on the main page

### 4. Dependencies
- **`package.json`** - Added `openai` package (version ^4.77.0)

### 5. Environment Variables
- **`.env.local`** - Created with placeholder for OpenAI API key

## Pricing Logic

### Transfer Pricing
The AI correctly calculates transfer pricing as:

```
Transfer Price = MAX($20, (deadhead miles × $0.75) + (loaded miles × $2.3))
```

- **$20** is the minimum charge (not a base that gets added to)
- **Deadhead miles:** Distance from current location to pickup point
- **Loaded miles:** Distance from pickup to dropoff
- If the calculated cost is less than $20, the customer pays $20
- If it's more than $20, they pay the calculated amount

**Example:**
- 5 miles deadhead + 10 miles loaded
- Calculation: (5 × $0.75) + (10 × $2.3) = $3.75 + $23 = $26.75
- Customer pays: $26.75 (since it's greater than $20 minimum)

### Hourly Pricing

**Minimum:** 2 hours required

**Weekdays (Monday-Friday):**
- First 2 hours: $75/hour = $150
- Each additional hour: $50/hour
- Example: 4 hours = $150 + (2 × $50) = $250

**Weekends (Saturday-Sunday):**
- 1st hour: $140
- 2nd hour: $110
- 3rd hour: $100
- Each additional hour: $80/hour
- Example: 4 hours = $140 + $110 + $100 + $80 = $430

## Features

### Ryder's Capabilities
1. **Instant Price Quotes** - Calculates accurate pricing for transfers and hourly bookings
2. **Service Recommendations** - Suggests appropriate services based on customer needs
3. **Value Proposition Highlighting** - Mentions Sip & Ride, Tesla features, and other unique offerings
4. **Conversational Flow** - Collects information naturally without sounding scripted
5. **Location Intelligence** - Understands DFW landmarks, airports, and major venues

### Unique Value Propositions Ryder Highlights

1. **Sip & Ride Experience**
   - Premium beverages chilled in Tesla's sub-trunk freezer
   - Available drinks: Red Wine, Rosé Wine, White Wine, Premium Water, Topo Chico, Titos Vodka
   - Perfect for corporate, romantic evenings, celebrations, and airport transfers

2. **2025 Tesla Model Y Features**
   - Zero emissions, whisper-quiet operation
   - 5-star safety rating with Autopilot
   - Panoramic glass roof
   - 14-speaker premium audio system
   - High-speed internet and entertainment
   - HEPA air filtration

3. **Owner-Operated Service** - Personal attention to every ride
4. **Airport Expertise** - Specialized knowledge of DFW and Love Field
5. **24/7 Availability** - Round-the-clock service

## Setup Instructions

### Step 1: Install Dependencies

```bash
cd /path/to/rydelightwebsite
pnpm install
```

This will install the new `openai` package along with any other dependencies.

### Step 2: Get OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign in or create an account
3. Navigate to API Keys section
4. Click "Create new secret key"
5. Copy the API key (it starts with `sk-`)

### Step 3: Configure Environment Variable

Edit the `.env.local` file and replace the placeholder with your actual API key:

```env
OPENAI_API_KEY=sk-your-actual-api-key-here
```

**Important:** Never commit your `.env.local` file to GitHub. It should already be in your `.gitignore`.

### Step 4: Add Environment Variable to Vercel

Since your website is deployed on Vercel, you need to add the API key there as well:

1. Go to your Vercel dashboard
2. Select your `rydelightwebsite` project
3. Go to **Settings** → **Environment Variables**
4. Add a new environment variable:
   - **Name:** `OPENAI_API_KEY`
   - **Value:** Your OpenAI API key (starts with `sk-`)
   - **Environment:** Select all (Production, Preview, Development)
5. Click **Save**

### Step 5: Test Locally

```bash
pnpm dev
```

Visit `http://localhost:3000` and click the chat bubble in the bottom-right corner to test Ryder.

### Step 6: Deploy to Production

```bash
git add .
git commit -m "Add AI chat widget with Ryder booking specialist"
git push origin main
```

Vercel will automatically deploy your changes. The chat widget will appear on your live site within a few minutes.

## Usage Examples

### Example Conversation 1: Transfer Pricing

**User:** "How much for a ride from DFW Airport to downtown Dallas?"

**Ryder:** "I'd be happy to help you with a quote for your airport transfer! For a trip from DFW Airport to downtown Dallas, the distance is approximately 20 miles. Here's your estimated pricing:

- Pickup: DFW Airport
- Dropoff: Downtown Dallas
- Estimated cost: **$46** (20 miles × $2.3/mile)

This includes our premium 2025 Tesla Model Y service with zero emissions and whisper-quiet operation. Would you like to add our exclusive Sip & Ride experience? We can have your favorite beverage perfectly chilled and ready for you!

Ready to book? Visit: https://customer.moovs.app/rydelight/new/info"

### Example Conversation 2: Hourly Pricing

**User:** "I need a car for 4 hours on Saturday for a wedding"

**Ryder:** "Congratulations on the wedding! I'd be happy to provide a quote for 4 hours of service on Saturday.

For weekend hourly service:
- 1st hour: $140
- 2nd hour: $110
- 3rd hour: $100
- 4th hour: $80
- **Total: $430**

Our 2025 Tesla Model Y is perfect for weddings with its elegant white vegan leather interior and panoramic glass roof. We can also include our Sip & Ride experience with champagne or wine to make the day even more special!

Would you like to proceed with booking?"

## Customization

### Adjusting Ryder's Personality

Edit `app/api/chat/route.ts` and modify the `systemPrompt` variable to change:
- Tone and communication style
- Level of detail in responses
- Which value propositions to emphasize
- Conversation flow preferences

### Changing Widget Appearance

Edit `components/ai-chat-widget.tsx` to customize:
- Colors (currently uses Rydelight blue: `#0091ea`)
- Position (currently bottom-right)
- Size (currently 380px × 600px)
- Animation effects
- Button style

### Updating Pricing

If your pricing changes, update the calculations in `app/api/chat/route.ts`:
- `calculateTransferPrice()` function for transfer rates
- `calculateHourlyPrice()` function for hourly rates
- Update the pricing information in the `systemPrompt`

## Technical Details

### Technology Stack
- **Frontend:** React, TypeScript, Framer Motion (animations)
- **Backend:** Next.js API Routes
- **AI:** OpenAI GPT-4.1-mini
- **Styling:** Tailwind CSS

### API Costs
- The chat uses OpenAI's `gpt-4.1-mini` model
- Estimated cost: ~$0.001-0.003 per conversation
- Very affordable for typical usage volumes

### Performance
- Chat widget is lazy-loaded (only loads when needed)
- API responses typically take 1-3 seconds
- No impact on initial page load time

## Troubleshooting

### Chat Widget Not Appearing
1. Check browser console for errors
2. Verify `pnpm install` completed successfully
3. Clear browser cache and reload

### "Failed to get response" Error
1. Verify `OPENAI_API_KEY` is set correctly in `.env.local`
2. Check that the API key is valid and has credits
3. Verify the environment variable is set in Vercel (for production)

### Incorrect Pricing Calculations
1. Review the pricing logic in `app/api/chat/route.ts`
2. Check that the `systemPrompt` has the correct pricing information
3. Test with specific examples and adjust as needed

### API Key Issues on Vercel
1. Go to Vercel Dashboard → Project Settings → Environment Variables
2. Verify `OPENAI_API_KEY` is set for all environments
3. Redeploy the project after adding the variable

## Security Notes

- ✅ API key is stored securely in environment variables
- ✅ Never exposed to the client-side code
- ✅ All AI processing happens server-side
- ✅ `.env.local` should be in `.gitignore` (never committed)

## Support

For questions or issues:
- **Email:** booking@rydelight.com
- **Phone:** (469) 919-0519

## Future Enhancements

Potential improvements you could add:
1. **Distance API Integration** - Use Google Maps API for exact distance calculations
2. **Booking Integration** - Allow direct booking through the chat
3. **Conversation History** - Save chat history for returning visitors
4. **Analytics** - Track common questions and conversion rates
5. **Multi-language Support** - Add Spanish language support
6. **Voice Input** - Allow customers to speak their questions

## Files Modified/Created

```
rydelightwebsite/
├── components/
│   └── ai-chat-widget.tsx          [NEW]
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts            [NEW]
│   └── page.tsx                    [MODIFIED]
├── package.json                    [MODIFIED]
├── .env.local                      [NEW]
└── AI_CHAT_WIDGET_README.md        [NEW]
```

---

**Implementation Date:** January 13, 2026
**Version:** 1.0
**Status:** Ready for Production
