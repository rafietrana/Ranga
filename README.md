# Ranga - (Art and Craft Hub)

Welcome to Ranga - Art and Craft Hub, your one-stop destination for all things related to art and craft. Whether you are interested in Landscape Painting, Portrait Drawing, Watercolour Painting, Oil Painting, Charcoal Sketching, or Cartoon Drawing, we've got you covered!

## Website Sections

### Navbar
- **Website name/logo**
- **Home**
- **All Art & Craft Items**
- **Add Craft Item (Private/Protected Route)**
- **My Art & Craft List (Private/Protected Route)**
- - If the user is not logged in:
  - **Login**
  - **Register**
- - If the user is logged in:
  - User photoURL (hover to display displayName)
  - **Log out**

### Home Page
- Navbar
- Banner/Slider
- Craft Items Section
- Art & Craft Categories Section
- 2 Extra Sections
- Footer

### Banner/Slider
- Add a slider with meaningful information.

### Craft Items Section
- Display at least 6 cards of craft items from the database.
- Each card includes:
  - Image
  - Item Name
  - View Details Button

### Extra Sections
- Two relevant and meaningful extra sections.

### All Art & Craft Items Page
- Display all art & craft items added to the database in a table.
- Each item includes:
  - Image
  - Item Name
  - View Details Button

### Add Craft Item Page (Private/Protected Route)
- Form for adding an art & craft item:
  - Image (use image URL)
  - Item Name
  - Subcategory Name
  - Short Description
  - Price
  - Rating
  - Customization (Yes/No)
  - Processing Time
  - Stock Status (In stock, Made to Order)
  - User Email
  - User Name
  - "Add" button

### View Details Page (Private/Protected Route)
- Display detailed information about an art & craft item.

### My Art & Craft List (Private/Protected Route)
- Display arts & crafts added by the user.
- Each card includes:
  - Image
  - Item Name
  - Price
  - Rating
  - Customization
  - Stock Status
  - "Update" Button
  - "Delete" Button
- Filter functionality based on "customization".

### Art & Craft Categories Section
- Display at least 6 art & craft subcategories.
- On clicking a category card:
  - Redirect to a page showing all art & craft items of that specific subcategory.
  - Each item card includes:
    - Image
    - Item Name
    - Subcategory Name
    - Short Description
    - Price
    - Rating
    - Processing Time
    - "View Details" button

## Features
- Responsive design for all devices.
- Private route persistence after page reload.
- Environment variables used to hide Firebase config keys and MongoDB credentials.
- Password and email-based authentication.
- Password verification criteria:
  - Must have an uppercase letter.
  - Must have a lowercase letter.
  - Length must be at least 6 characters.
- Dark/light theme toggle for the home page.
- Toast/sweet alert for success and error messages.
- Implemented react-simple-typewriter and react-awesome-reveal packages.

[Visit Ranga - Art and Craft Hub](https://assignment-10-a2856.web.app/)
