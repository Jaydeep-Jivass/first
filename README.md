>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Project Overview

The WiFi Logger Mobile App is designed to connect to a specific Wi-Fi network (provided by an ESP8266 module), fetch logs from this network, and display them in real-time. The app will allow users to enter Wi-Fi credentials (SSID and password) and the IP address of the ESP8266 module. It will also show a list of recent SSIDs for quick selection.

## Technologies Used
   - React Native: For building the mobile application.
   - Axios: For making HTTP requests.
   - react-native-wifi-reborn: For managing Wi-Fi connections (Android only).
## App Features
   - WiFi Connection: Connect to a specified Wi-Fi network using SSID and password.
   - Fetch Logs: Fetch logs from the ESP8266 module using its IP address.
   - Recent SSIDs: Display a list of recent SSIDs for quick selection.

## Components

### 1. WiFiForm
   - Props:
      - **onSubmit:** Function to handle form submission.
   - State:

      - **ssid:** String
      - **password:** String
      - **ipAddress:** String
     
   - Description:
A form to input SSID, password, and IP address.

### 2. RecentSSIDs
      
   - Props:

      - **ssids:** Array of SSID strings.
      - **onSelect:** Function to handle SSID selection.
     
   - Description:
Displays a list of recent SSIDs.

### 3. WiFiLogs

   - Props:
       - **ssid:** String
       - **password:** String
       - **ipAddress:** String
   - State:
        - **logs:** Array of logs
    
   - Description:
Fetches and displays logs from the ESP8266 module.

### Main App Component
Integrates the above components and manages the state.

## Testing Steps
1. Set Up the ESP8266 Module:
   - Ensure your ESP8266 module is configured to create a Wi-Fi network and serve logs over HTTP.
2. Enter Wi-Fi Details:
   - Open the app and press the "WiFi Logs" button.
   - Enter the SSID, password, and IP address of the ESP8266 module in the form.
3. Select Recent SSID:
   - Alternatively, select an SSID from the list of recent SSIDs.
4. Fetch Logs:
   - The app will fetch logs from the ESP8266 module at the specified IP address and display them in real-time.

## Troubleshooting
If this is not giving any logs data then you can try using native-modules. There is also one more library named [react-native-wifi-reborn](https://www.npmjs.com/package/react-native-wifi-reborn).

## Learn More
To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
