1️⃣ What is React Native?

Answer:
“React Native is a framework that allows us to build mobile applications using JavaScript and React.
It renders real native UI components instead of web views, giving better performance than hybrid web apps.”

2️⃣ Difference between React Native and React.js?

Answer:
“React.js is used for web applications and renders HTML elements, while React Native is used for mobile apps and renders native components like View, Text, and ScrollView.”

3️⃣ Why did you use WebView in your project?

Answer:
“I used WebView to convert an existing web application into a mobile app quickly.
This allowed code reuse, faster delivery, and easier maintenance while still supporting native features like camera access.”

4️⃣ How does camera access work in a WebView app?

Answer:
“Camera permission is handled at the native level by the mobile OS.
Inside the web app, I detect the WebView environment and skip browser permission checks, allowing the camera to open smoothly for QR scanning.”

5️⃣ What is Expo and why did you use it?

Answer:
“Expo is a toolchain that simplifies React Native development by handling native configurations.
I used Expo for faster setup, easier builds, and better development experience.”

6️⃣ What is the difference between Expo and React Native CLI?

Answer:
“Expo provides a managed environment with built-in APIs, while React Native CLI gives full control over native code.
Expo is faster for development, while CLI is preferred for deep native customization.”

7️⃣ How do you handle loading states in React Native?

Answer:
“I use ActivityIndicator to show loading states while data or WebView content is loading, improving user experience.”

8️⃣ How do you detect WebView inside a web app?

Answer:
“I detect WebView by checking for window.ReactNativeWebView.
This allows the web app to adjust behavior such as camera permission handling.”

9️⃣ How does WebView communicate with the web app?

Answer:
“WebView can communicate with the web app using postMessage and message handlers, allowing data exchange between native and web layers.”

🔟 Why choose WebView instead of building a full native app?

Answer:
“WebView reduces development time, avoids duplicate codebases, and is ideal when the web app is already mature and feature-complete.”

1️⃣1️⃣ What are core components in React Native?

Answer:
“View, Text, ScrollView, FlatList, Image, and ActivityIndicator are core components.”

1️⃣2️⃣ How is styling done in React Native?

Answer:
“Styling is done using StyleSheet, which uses a JavaScript-based styling approach similar to CSS Flexbox.”

1️⃣3️⃣ How do you handle navigation in React Native?

Answer:
“Navigation is usually handled using libraries like React Navigation.”

1️⃣4️⃣ How do you optimize performance in React Native?

Answer:
“By using FlatList for large lists, avoiding unnecessary re-renders, and handling heavy logic on the backend.”

1️⃣5️⃣ What challenges did you face using WebView?

Answer:
“Handling permissions and ensuring smooth communication between native and web layers was challenging, which I solved using environment detection and proper WebView configuration.”

🎯 Strong Closing Answer (If interviewer asks)

“My strength is integrating web and mobile systems efficiently.
I focus on clean architecture, platform-aware logic, and scalable solutions.”
