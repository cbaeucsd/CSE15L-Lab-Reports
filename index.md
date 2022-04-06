<h1>CSE15L Tutorial: Setting Up Remote Access</h1>
This tutorial will guide you on how to set up remote access for CSE15L. We will set up the necessary programs and do a demonstration of remotely connecting and transferring files between your computer and a server.
<div id="toc_container">
<p class="toc_title">Contents</p>
<ul class="toc_list">
<li>1 <a href="#Installing_VSCode">Installing VSCode</a></li>
<li>2 <a href="#Remotely_Connecting">Remotely Connecting</a></li>
    <ul>
    <li>2.1 <a href="#Install_OpenSSH">1.1 Install OpenSSH</a></li>
    <li>2.2 <a href="#Looking_Up_Your_Account">Looking Up Your Account</a></li>
    <li>2.3 <a href="#Connecting_with_Visual_Studio_Terminal">Connecting with Visual Studio Terminal</a></li>      
    </ul>
<li>3<a href="#Trying_Some_Commands"> Trying Some Commands</a></li>
</ul>
</div>

<details open>
  <summary><h2 id="Installing_VSCode">Installing VSCode</h2></summary>
  
Visual Studio Code is a code editing program with an integrated terminal, which will allow us to seamlessly write code and upload it to a remote server. 
  <br/>
Visual Studio Code supports Windows, macOS, and Linux. 
  <br/>
Download and install VSCode at <a href="https://code.visualstudio.com/">https://code.visualstudio.com/</a>.
<br/><br/>
Press the button inside the red rectangle to download, use the dropdown button on the right to switch installers if necessary(ex. to a Linux or macOS installer).
<br/>
<img src="/docs/assets/images/vsinstall.png" width="800"> 

<br/><br/>
After you are finished installing and launch Visual Studio Code, you should be greeted with a page similar to the one below.
<br/>
<img src="/docs/assets/images/vsstart.png" width="800">

</details>

<details open>
   <summary><h2 id="Remotely_Connecting">Remotely Connecting</h2></summary>
    We will now use the terminal in Visual Studio Code to connect to your course-specific account. Before we do however, there are some more things to set up. 
  
   <h3 id="Install_OpenSSH">Install OpenSSH (Windows only)</h3>
    If you are on Windows, install OpenSSH by following the instructions in this link <br/>
  <a href="https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse">https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse</a>. 
  <br/>
    You only need to do the steps in either <b>Install OpenSSH using Windows Settings</b> or <b>Install OpenSSH using PowerShell</b>.
    
  <h3 id="Looking_Up_Your_Account">Looking Up Your Account</h3>
  You can lookup your course-specific account here: <a href="https://sdacs.ucsd.edu/~icc/index.php">https://sdacs.ucsd.edu/~icc/index.php</a> 
  <br/>
  Enter your Username and Account ID in the red box. 
  <img src="/docs/assets/images/accountlookup.png" width="800"> 
  <br/>
  Your account username is in the green box below. 
  <img src="/docs/assets/images/accountlookup2.png" width="800"> <br/>
  Note: If you haven't already, reset your account password, using the temporary password given to you via email as your current password. 
   <h3 id="Connecting_with_Visual_Studio_Terminal">Connecting with Visual Studio Terminal</h3>
  <p>Launch Visual Studio code. To access the terminal, press Ctrl/Command + `, or alternatively go to the top-left menu and select <br/> Terminal &#8594; New Terminal. You should see the terminal in the bottom half of the program like so:</p>
  <img src="/docs/assets/images/terminal.png" width="800">
  <br/>
  Now we will login with the command:
  <pre>
  <code>
  $ ssh accountusername@ieng6.ucsd.edu
  </code>
</pre>
where accountusername is the previously retrieved name from  the account lookup. <br/>
 Your login command will probably look something like this:
    <pre>
  <code>
  $ ssh cs15lsp22abc@ieng6.ucsd.edu
  </code>
</pre>
 Note: Do not type or add the $ sign, it is just a symbol that means that shell is accepting commands. 
  <br/><br/>
 After this command it will prompt you with a password which you will now enter. Don't worry if it looks like nothing is changing on the terminal, your password input is being properly received and the lack of response is a security feature.  <br/>
 If you have inputed your login and password correctly, you should now see this in the terminal: <br/>
 <img src="/docs/assets/images/successlogin.png" width="800">
</details>

<details open>
   <summary><h2 id="Trying_Some_Commands">Trying Some Commands</h2></summary>
  
  </details>
