<html>
    <head>
	<link rel="stylesheet" href="styles.css" />
        <script src="onsubmit_event.js"></script>
    </head>
    <body>
        <div>
            Welcome to my website!
        </div>
        <div id="list-builder"></div>
        <div id="popup-box">
            <img src="close.svg" id="popup-close" />
            <div id="popup-box-content">
                <h1>Subscribe to The Energest Developer Newsletter</h1>
                <p>
                    Stay up to date on the latest in web, mobile, and game development from Energest by subbscribing to our weekly newsletter.
                </p>
                <form id="popup-form" action="#" name="form">
                    <input type="text" name="name" id="name" placeholder="Full Name" required/>
                    <input type="text" name="email" id="email" placeholder="Email Address" required/>
                    <button type="button" name="subscribe">Subscribe</button>
                </form>
            </div>
        </div>
        <script src="http://code.jquery.com/jquery-3.3.1.min.js"></script>
	<script src="popup-builder.js">
</script>
    </body>
</html>

