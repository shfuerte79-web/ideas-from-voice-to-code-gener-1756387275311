import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Voice-to-Code Generator',
  description: '[
  {
    "title": "Voice-Activated Code Review Assistant",
    "one_liner": "An AI that reviews your code using voice commands for real-time feedback.",
    "why_now": "Remote work has increased the need for quick, effective code review methods.",
    "novel_mechanism": "Integrates NLP to interpret voice commands and provide code insights.",
    "ai_stack": [
      "GPT-4",
      "RAG",
      "Speech"
    ],
    "edge_use_cases": [
      "Pair programming with AI",
      "Instant debugging based on spoken queries"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Voice input for code review",
        "Feedback display",
        "Integration with GitHub"
      ],
      "tools": [
        "Next.js",
        "Firebase",
        "SpeechRecognition API"
      ],
      "data_bootstrap": [
        "public OpenAI code review datasets",
        "synthetic code samples from LLM"
      ],
      "risk": [
        "Voice recognition errors",
        "Misinterpretation of commands"
      ],
      "mitigation": [
        "Add confirmation steps",
        "Use a feedback loop to improve accuracy"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Transform traditional code reviews",
        "What if your AI buddy could debug?"
      ],
      "channels": [
        "ProductHunt",
        "LinkedIn",
        "Dev.to"
      ],
      "pricing": {
        "free": "Limited reviews per week",
        "pro": "$10/month for unlimited reviews",
        "business": "$100/month for teams"
      }
    },
    "moat": [
      "Developer community engagement",
      "First-mover advantage in voice-code interaction"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 9,
      "revenue_potential": 7,
      "defensibility": 6
    },
    "total_score": 30,
    "reasoning": "Voice-activated tools are underexplored in coding, positioning this product uniquely against competitors."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}