# Notes & Design Decisions

## Figma vs README Discrepancies

### OTP Box Count
- **README states:** 4-digit OTP
- **Figma shows:** 6 OTP input boxes
- **Decision:** Following Figma (6 boxes) as the README states: *"Figma/Screenshots are the single source of truth"*

### Bottom Tab Labels
- **Figma Home screen:** Shows "Settings" for the middle tab
- **Figma Open State screen:** Shows "Progress" for the middle tab
- Both use the same icon (easel/presentation board icon)
- **Decision:** Used "Settings" label (matches README) with the Figma icon

### AI VS AI (LISTEN) Button
- Marked as "DUMMY" in Figma
- Implemented as a disabled button with `#806B26` background and 70% opacity

## Technical Choices

### FlashList
Used `@shopify/flash-list` with `estimatedItemSize={100}` for the question list as mandated by the assignment.

### expo-image
All images use `expo-image` with `cachePolicy="memory-disk"` instead of React Native's built-in `Image` component.

### Company Logos
Using Clearbit API: `https://logo.clearbit.com/[domain].com` with a `LogoFallback` component that renders a styled initial letter if the logo fails to load.

### Question Card Colors
- Card 1 (current): Green background `#C6F0B9` with dark green bottom border `#2E8B57`
- Cards 2-3 (upcoming): Gold background `#FAE39D` with dark gold bottom border `#C49A1A`
- Cards 4-5 (locked): Gray background `#E8E8EC` with gray bottom border `#B0B0B8`
- Number badge on gold cards: `#FFD033` (Yellow/40, confirmed from Figma)

### Navigation
- Auth flow uses `navigation.replace()` to prevent back-navigation to splash/welcome
- Root uses NativeStack for Auth → Main transition
- Main uses BottomTabs with a nested HomeStack (NativeStack) for Home → SessionResult
