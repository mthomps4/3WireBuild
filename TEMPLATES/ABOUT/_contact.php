<?php
  if($_POST["submit"]) {
      $recipient="matthew.thompson.a@gmail.com";
      $subject="3Wire Contact";
      $sender=$_POST["name"];
      $senderEmail=$_POST["email"];
      $message=$_POST["message"];

      $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

      mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

      $thankYou="<p>Thank you! Your message has been sent.</p>";
  }
?>
<!--http://htmldog.com/techniques/formtoemail/ -->

<div id="Wrapper">
	<section id="main-section">

			<h1 class="CTitle">Contact Me</h1>

			<?=$thankYou ?>


      <form id="contact" action="" method="post">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label for="tel">Phone:</label>
          <input type="tel" id="tel" name="tel" />

          <label for="msg">Message:</label>
          <textarea id="msg" name="message" rows="4"></textarea>


          <button class="contactSubmit" type="submit" name="submit">Send</button>
      </form>

	</section> <!--Main-Section-->
</div> <!--Wrapper-->

<div id="buttons">
  <a href="#/about" class="infobox about">About</a>
  <a href="#/projects" class="infobox projects">Projects</a>
</div>
