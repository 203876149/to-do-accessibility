# Project Name
To Do List Application

## Overview

This application was developed with a focus on accessibility, adhering to CPAT (Center for Plaintext Accessibility Testing) guidelines. This document details the steps taken to ensure compliance with accessibility standards and provides instructions for testing the application's accessibility features.

## CPAT Guidelines Implementation

### 1. Keyboard Accessibility
- **Tab Navigation**: All interactive elements (buttons, links, and form fields) are accessible via keyboard navigation, allowing users to navigate using `Tab`, `Enter`, and `Arrow` keys.
- **Focus Indicators**: Visible focus indicators are applied to each interactive element to improve usability for keyboard-only users.

### 2. Accessible Descriptions and Labels
- **Form Labels**: All form fields have accessible labels (`aria-label` attributes or angular matrial mat-label) that are programmatically associated with their inputs.
- **Button Descriptions**: Buttons and icons include descriptive `aria-labels` to clarify their purpose, even when it might not be immediately apparent.

### 3. Semantic HTML and ARIA Roles
- **Semantic Markup**: The application uses semantic HTML elements (e.g., `<header>` , `<button>`) to convey structure.
- **ARIA Roles and States**: ARIA roles and states (such as `aria-live` and `aria-checked`) communicate element purposes and dynamic changes to assistive technologies.

### 4. Screen Reader Compatibility
- **Live Announcements**: An `aria-live` region is implemented to announce important task updates (e.g., adding, completing, or removing tasks) for screen reader users by using cdk LiveAnnouncer directive.
- **Field States**: Element states like completion or deletion are communicated with `aria-checked` attributes and live announcements.

## Accessibility Testing

To verify screen reader and keyboard accessibility, the following testing steps were performed:

### 1. Screen Reader Testing
- **Tool**: NVDA
- **Steps**:
  - Navigate through all interactive elements to confirm each has a clear, descriptive label.
  - Ensure announcements are made when tasks are added, marked as complete, or removed.
  - Confirm that the `aria-live` region appropriately announces task updates.

### 2. Keyboard Accessibility Testing
- **Steps**:
  - Use the `Tab` key to navigate through all elements, ensuring each one is reachable and shows a visible focus indicator.
  - Test `Enter` and `Space` on buttons and other actionable items to confirm they respond correctly.
  - Verify that all form controls are accessible and fully functional via keyboard input alone.

## Deployment

You can access the live version of this application at the following link:

https://203876149.github.io/to-do-accessibility/

## License

This project is licensed under the MIT License.
