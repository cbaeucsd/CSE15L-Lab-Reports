<h1>CSE15L Tutorial: Setting Up Remote Access</h1>
This tutorial will guide you on how to set up remote access for CSE15L. We will set up the necessary programs and do a demonstration of remotely connecting and transferring files between your computer and a server.
<div id="toc_container">
<p class="toc_title">Contents</p>
<ul class="toc_list">
<li>1 <a href="#Installing_VSCode">Installing VSCode</a></li>
<li>2 <a href="#Remotely_Connecting">Remotely Connecting</a></li>
    <ul>
    <li>2.1 <a href="#Install_OpenSSH">Install OpenSSH</a></li>
    <li>2.2 <a href="#Looking_Up_Your_Account">Looking Up Your Account</a></li>
    <li>2.3 <a href="#Connecting_with_Visual_Studio_Terminal">Connecting with Visual Studio Terminal</a></li>      
    </ul>
<li>3 <a href="#Trying_Some_Commands">Trying Some Commands</a></li>
<li>4 <a href="#Moving_Files_With_SCP">Moving Files With SCP</a></li>
<li>5 <a href="#Setting_An_SSH_Key">Setting An SSH Key</a></li>
<li>6 <a href="#Optimizing_Remote_Running">Optimizing Remote Running</a></li>      
</ul>
</div>

<details open>
  <summary><h2 id="Installing_VSCode">Installing VSCode</h2></summary>
  
<p>Visual Studio Code is a code editing program with an integrated terminal, which will allow us to seamlessly write code and upload it to a remote server. </p>
<p>Visual Studio Code supports Windows, macOS, and Linux. </p>
<p>Download and install VSCode at <a href="https://code.visualstudio.com/">https://code.visualstudio.com/</a>.</p>
<p>Press the button inside the red rectangle to download, use the dropdown button on the right to switch installers if necessary (ex. to a Linux or macOS installer).</p>
<img src="/docs/assets/images/vsinstall.png" width="800"> <br><br>
<p>After you are finished installing and launch Visual Studio Code, you should be greeted with a page similar to the one below.</p>
<img src="/docs/assets/images/vsstart.png" width="800">
</details>

<details open>
   <summary><h2 id="Remotely_Connecting">Remotely Connecting</h2></summary>
    <p>We will now use the terminal in Visual Studio Code to connect to your course-specific account. Before we do however, there are some more things to set up.</p>  
   <h3 id="Install_OpenSSH">Install OpenSSH (Windows only)</h3>
    <p>If you are on Windows, install OpenSSH by following the instructions in this link <br>
  <a href="https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse">https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse</a>. </p>
    <p>You only need to do the steps in either <b>Install OpenSSH using Windows Settings</b> or <b>Install OpenSSH using PowerShell</b>.</p> 
  <h3 id="Looking_Up_Your_Account">Looking Up Your Account</h3>
 <p>You can lookup your course-specific account here: <a href="https://sdacs.ucsd.edu/~icc/index.php">https://sdacs.ucsd.edu/~icc/index.php</a></p>
  Enter your Username and Account ID in the red box. 
  <img src="/docs/assets/images/accountlookup.png" width="800"> <br><br>
  Your account username is in the green box below. 
  <img src="/docs/assets/images/accountlookup2.png" width="800"> <br><br>
  <p>Note: If you haven't already, reset your account password, using the temporary password given to you via email as your current password. </p>
   <h3 id="Connecting_with_Visual_Studio_Terminal">Connecting with Visual Studio Terminal</h3>
  <p>Launch Visual Studio code. To access the terminal, press Ctrl/Command + `, or alternatively go to the top-left menu and select <br/> Terminal &#8594; New Terminal. You should see the terminal in the bottom half of the program like so:</p>
  <img src="/docs/assets/images/terminal.png" width="800"><br><br>
  <p>Now we will login with the command:
  <pre>
  <code>
  $ ssh accountusername@ieng6.ucsd.edu
  </code>
</pre>
where accountusername is the previously retrieved name from  the account lookup. </p>
 Your login command will probably look something like this:
    <pre>
  <code>
  $ ssh cs15lsp22abc@ieng6.ucsd.edu
  </code>
</pre>
 Note: Do not type or add the $ sign, it is just a symbol that means that shell is accepting commands. <br><br>
 If you are connecting for the first time to this server, you will get this message:
    <pre>
  <code>
The authenticity of host 'ieng6.ucsd.edu (128.54.70.238)' can't be established.
RSA key fingerprint is SHA256:ksruYwhnYH+sySHnHAtLUHngrPEyZTDl/1x99wUQcec.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
  </code>
</pre>    
Type yes to continue.<br><br>
    
 After this command it will prompt you with a password which you will now enter. Don't worry if it looks like nothing is changing on the terminal, your password input is being properly received and the lack of response is a security feature.  <br>
 If you have inputed your login and password correctly, you should now see this in the terminal: <br>
 <img src="/docs/assets/images/successlogin.png" width="800">
</details>

<details open>
   <summary><h2 id="Trying_Some_Commands">Trying Some Commands</h2></summary>
    
  Now that we have successfully logged in, we will now try some commands. Try running:
     <pre>
  <code>
  $ cd
  $ ls
  $ pwd
  $ mkdir
  $ cp
  </code>
</pre>   
on the terminal. Afterwards, log out of the remote server and try these commands again. Note what each command does while logged into the remote server and on your computer. <br>
Hint: to log out of the remote server, you can either:<br/>
    <ul>
  <li>Press Ctrl + D</li>
  <li>Run the command <code>exit</code></li>
</ul>
    
Some more specific useful commands you can try are:
   <pre>
  <code>
  $ cd ~
  $ ls -lat
  $ ls -a
  $ ls &lt;directory&gt;
  $ cp /home/linux/ieng6/cs15lsp22/public/hello.txt ~/
  $ cat /home/linux/ieng6/cs15lsp22/public/hello.txt  
  </code>
</pre>

where &lt;directory&gt; is /home/linux/ieng6/cs15lsp22/cs15lsp22abc, where the abc is one of the other group members’ username.
 
Note what happens and try to guess what these commands do. <br><br>
  Terminal output after some tests on the server:
 <img src="/docs/assets/images/testing.png" width="800">    
  </details>

<details open>
   <summary><h2 id="Moving_Files_With_SCP">Moving Files With SCP</h2></summary>
    
    <p>We will now use Secure Copy(SCP) to copy files from your computer to the remote server. <br>
    First, we will create a sample file to upload to the server. <br>
    Using Visual Studio Code, Create a file called <code>WhereAmI.java</code> and paste the contents in the code block below:</p>
    
 <pre>
  <code>
class WhereAmI {
  public static void main(String[] args) {
    System.out.println(System.getProperty("os.name"));
    System.out.println(System.getProperty("user.name"));
    System.out.println(System.getProperty("user.home"));
    System.out.println(System.getProperty("user.dir"));
  }
}
  </code>
</pre> 
    
Run this file using javac and java on your computer and take a look at the output.<br><br>
Note: To use javac and java in Visual Studio, you will likely have to install an extension called <b>Extension Pack for Java</b>.

Screenshot of running WhereAmI.java on the computer:
 <img src="/docs/assets/images/WhereAmI.png" width="800">    
    
While logged out from the server, run this command from the directory where the file is contained:
     <pre>
  <code>
$ scp WhereAmI.java cs15lsp22abc@ieng6.ucsd.edu:~/
  </code>
</pre>    
 replacing abc with your specific account letters. Enter your password when prompted. <br/><br/>
  <p>Log into your account with <code>ssh</code>, and use the command <code>ls</code>. You should see the file in your home directory. You can now run it on the server using the same commands as before. Even if your computer doesn't have Java, you will be able to run your file on the server because it has Java installed.</p><br>
  Compare the output from running it on the server and from running it on your computer. What does this tell you about <code>getProperty</code>?<br><br>
   Before proceeding to the next section, try this activity:
  <ol>
  <li>Have someone on your team start a timer</li>
  <li>Make a change to WhereAmI.java and save the file</li>
  <li>Copy the file to the remote server</li>
  <li>Log into the remote server and run the file</li>
  <li>Stop the timer</li>    
</ol>  
 Take a note of how long this took you. If you had to do this 100 times, how long would it take? In the next parts, we will work on shortening the time it takes to do this process.
  </details>
 
<details open>
   <summary><h2 id="Setting_An_SSH_Key">Setting An SSH Key</h2></summary>
    
    <p>To avoid the tedious step of entering a password everytime we <code>ssh</code> or <code>scp</code>, we will set up an SSH key on the server and your computer. A public key on the server and a private key in your client can be used instead of a password to securely log in to the server.</p>

    <p>On your client, run the command <code>$ ssh-keygen</code> to start generating a key pair. The process should look something like this:</p>
     <img src="/docs/assets/images/SSHKeyGen.png" width="800"><br>
    <p>Note: You are not required to and should not set a passphrase.</p><br>
    You should now have two files in the directory the command was executed, id_rsa and id_rsa.pub. We now need to copy the public key to the server. You can do so wit h the steps below:
      <pre>
  <code>
$ ssh cs15lsp22abc@ieng6.ucsd.edu
$ mkdir .ssh
$ logout
$ scp .ssh/id_rsa.pub cs15lsp22abc@ieng6.ucsd.edu:~/.ssh/authorized_keys
  </code>
</pre>    
Change either the working directory or the first argument of scp to match the file location.<br/>
If done correctly, you should now be able to <code>ssh</code> and <code>scp</code> without requiring a password input. 
<br><br>   
Repeat the timing activity of editing and running WhereAmI.java now that you don't have to input a password. How much time did you save per run?
   </details>   
   
 <details open>
   <summary><h2 id="Optimizing_Remote_Running">Optimizing Remote Running</h2></summary>
    As a challenge, try to find the quickest, simplest, and/or most pleasant way to make a local edit to WhereAmI.java and copy and run it on the server.
    <br><br>
    Some hints:<br>
    You can write a command in quotes after an ssh command. This will cause the command to run after logging in, and will automatically log out afterwards. Here is an example:
      <pre>
  <code>
$ ssh cs15lsp22zz@ieng6.ucsd.edu "ls"
  </code>
</pre>
Semicolons can be used to run miltiple commands on one line. Here is an example:
      <pre>
  <code>
$ cp WhereAmI.java OtherMain.java; javac OtherMain.java; java WhereAmI
  </code>
</pre>    
<br/><br/>
The best I could come up with is:
<pre>
  <code>
$ scp WhereAmI.java cs15lsp22abc@ieng6.ucsd.edu:~/  
$ ssh cs15lsp22abc@ieng6.ucsd.edu "javac WhereAmI.java; java WhereAmI"
  </code>
</pre>    
Can you do better?
  <br><br>  
Screenshot of one run with my commands:
 <img src="/docs/assets/images/Challenge.png" width="800">   
    
 <p>It takes about 40 seconds for me to write both commands. However for subsequent runs, I can press &#8593; on my keyboard while in the terminal to automatically load previously used commands into the terminal, which takes me about 5 seconds to do for both.</p>

 </details> 
