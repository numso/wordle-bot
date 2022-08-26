import { difference } from 'https://deno.land/std@0.153.0/datetime/mod.ts'
import { serve } from 'https://deno.land/std@0.145.0/http/server.ts'

// If you want to use this, pull the word list from the js files on the official
// wordle site and paste em in this list
const answers = ['WORDS', 'GO', 'HERE']

serve((req: Request) => {
  const date = new URL(req.url).searchParams.get('date')
  if (!date) return new Response('missing ?date query param', { status: 400 })
  const start = new Date('2021-06-19')
  const end = new Date(date)
  const { days } = difference(start, end, { units: ['days'] })
  return new Response(answers[days], { headers: { 'x-days-from': days } })
})
