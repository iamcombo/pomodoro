# Pomodoro Timer

## 1. Project Setup

- Vite + ReactTS
- Dependency:
  - Styling: `shadcn`
  - Animation: `Framer motion`
  - Icons: `@tabler/icons-react`

## 2. Component Structure

- **App Component**: This is the main component that will hold the overall structure and state of the timer.
- **Timer Component**: This component will handle the timer logic, displaying the remaining time and controls for starting, pausing, and resetting.
- **Settings Component (Optional)**: If you want to allow users to customize the Pomodoro durations (focus time, break time), you can create a separate component for settings.

## 3. State Management

- **useState Hook**: Use the useState Hook to manage the timer's state, including:
  - **currentTime**: The current time remaining in the current session (focus or break).
  - **sessionType**: Whether it's a "focus" or "break" session.
  - **intervalId**: The ID of the interval used to decrement the timer.
  - **settings**: An object containing focus duration, break duration, and other customizable settings (optional).

## 4. Timer Logic

- **Start/Pause**: Implement functions to start and pause the timer using setInterval and clearInterval. Update the currentTime state on each interval tick.
- **Reset**: Implement a function to reset the timer to the initial focus duration and set the sessionType to "focus."
- **Switch Session**: When the timer reaches 0, switch between "focus" and "break" sessions and update the currentTime accordingly.

## 5. UI Design

- **Display**: Show the remaining time clearly, potentially using a progress bar or a circular timer.
- **Controls**: Provide buttons for starting, pausing, and resetting the timer.
- **Settings (Optional)**: Allow users to adjust focus and break durations through input fields or other UI elements.

## 6. Additional Features (Optional)

- **Audio Notifications**: Play sounds to indicate the start and end of sessions.
- **Session History**: Keep track of completed Pomodoro sessions.
- **Themes**: Allow users to customize the appearance of the timer.
