# Design Guidelines — MushroomAI

## Colors
- Primary: Emerald green #047857 — trustworthy, nature-connected
- Secondary: Slate #0f172a — authoritative, serious
- Accent: Amber #d97706 — caution/warning, warm
- Danger: Rose red #e11d48 — toxic warnings
- Background: White #ffffff, off-white cards #f8fafc
- Success chip: emerald-50 bg / emerald-700 text
- Warning chip: amber-50 bg / amber-700 text
- Danger chip: red-50 bg / red-700 text

## Typography
- Display/Headlines: Bold/Black weight, tight tracking
- Body: Regular, relaxed line-height 1.6
- Labels: Uppercase, wide tracking, small (xs/sm)

## Key UI Components
- Chat interface: message bubbles with rounded-2xl, soft shadow; user messages right-aligned, AI responses left-aligned
- Safety badge: large prominent color-coded chip at top of every result (green=Safe, amber=Caution, red=Toxic, gray=Unknown)
- Species card: white card, scientific name + common name, habitat/season chips, distinguishing features list
- Look-alike warning: amber/orange callout block with species name and key differences
- Photo upload zone: large drag-drop / camera button, prominent CTA
- Confidence meter: subtle percentage bar under species name

## Layout Principles
- Mobile-first: single column, thumb-friendly tap targets
- Chat thread: full-width on mobile, max-w-2xl centered on desktop
- Safety-critical: color coding must be immediately obvious without reading text
- Nature-inspired: subtle leaf/organic motifs in empty states
- Clean and calm: avoid visual noise; white space is a feature