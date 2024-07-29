<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Homepage</title>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <style>
        html {
            overflow-x: hidden;
        }
        body {
            background-color: black;
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            overflow: hidden; /* Prevent scrollbars from showing */
            position: relative; /* Needed for sparkle effect */
        }
        .welcome-message {
            text-align: center;
            margin-bottom: 30px;
            font-size: 24px;
            animation: fadeIn 2s ease-in;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.8); /* Glowing effect */
        }
        .tabs {
            display: flex;
            gap: 15px;
            opacity: 0; /* Start invisible */
            animation: fadeInTabs 2s 2s forwards; /* Delay for fade-in */
        }
        .tab {
            padding: 10px 20px;
            background-color: #333;
            border: 1px solid #555;
            border-radius: 5px;
            text-decoration: none;
            color: white;
            font-size: 18px;
            transition: background-color 0.3s, transform 0.2s, text-shadow 0.3s;
        }
        .tab:hover {
            background-color: #555;
            transform: scale(1.05);
            text-shadow: 0 0 8px rgba(255, 255, 255, 0.8); /* Glowing effect */
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes fadeInTabs {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        /* Enhanced sparkle effect styling */
        .sparkle {
            position: absolute;
            width: 5px;
            height: 5px;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            pointer-events: none;
            transform: scale(0);
            animation: sparkleAnimation 1s forwards;
        }
        @keyframes sparkleAnimation {
            from {
                transform: scale(0);
                opacity: 0.8;
            }
            to {
                transform: scale(1);
                opacity: 0;
            }
        }
    </style>
</head>
<body>
    <div class="welcome-message">
        Welcome to Your Homepage!
    </div>
    <div class="tabs">
        <a href="#" class="tab">Files</a>
        <a href="#" class="tab">Personal</a>
        <a href="#" class="tab">Credits</a>
        <a href="https://mygallerydotcom.github.io/dummychecke-heck/success/users/" class="tab">Users</a>
    </div>

    <script>
        var sparkles = 50;
        var x = 0, y = 0;
        var sparkleElements = [];

        // Function to create a new sparkle element
        function createSparkle() {
            var sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            document.body.appendChild(sparkle);
            return sparkle;
        }

        // Function to trigger sparkles on mouse movement
        function createSparkles(e) {
            for (let i = 0; i < sparkles; i++) {
                var sparkle = createSparkle();
                sparkle.style.left = (e.pageX + (Math.random() - 0.5) * 20) + 'px';
                sparkle.style.top = (e.pageY + (Math.random() - 0.5) * 20) + 'px';
                sparkleElements.push(sparkle);
            }
            setTimeout(() => {
                sparkleElements.forEach(s => s.remove());
                sparkleElements = [];
            }, 1000);
        }

        document.onmousemove = createSparkles;
    </script>
</body>
</html>
