# Move Line Plugin for Obsidian

**Move Line Plugin** is a minimalist plugin for Obsidian that adds commands for moving the current line up or down using hotkeys—similar to the functionality available in VSCode.

## Features

- **Move Line Up:** Shifts the current line one position upward.
- **Move Line Down:** Shifts the current line one position downward.
- Lightweight and easy to integrate into Obsidian without any extra configuration.

## Installation

### Manual Build

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Dadadam999/move-line-up.git
   cd move-line-up

2. **Install Dependencies:**
   ```bash
   npm install

3. **Build the Plugin:**
   ```bash
   npm run build

4. **Install in Obsidian:**
   * Copy the built files (for example, the contents of the dist folder) into your vault’s plugin directory: ```<your_vault>/.obsidian/plugins/move-line-up```

   * Open Obsidian and enable the plugin via Settings > Community Plugins (ensure safe mode is disabled if necessary).

# Usage
1. ***Open a note*** in Obsidian.
2. ***Place the cursor*** on the line you wish to move.
3. ***Assign Hotkeys***:
  * Go to ***Settings*** > ***Hotkeys*** and search for the commands `Move Line Up` and `Move Line Down`.
  * Assign your preferred key combinations.
4. ***Move Lines:***
  * Use the assigned hotkeys to shift lines up or down.

# Configuration
This plugin does not include additional configuration settings. You can further customize or extend its functionality by modifying the source code.

# Contributing
If you have ideas for improvements or find any issues, please feel free to open an issue or submit a pull request.