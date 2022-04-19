<h1>Improving Markdown Parse</h1>
This lab report will go over three bugs that I have fixed in the given Markdown Parse. 
<div id="toc_container">
<p class="toc_title">Contents</p>
<ul class="toc_list">
<li>1 <a href="#Bug_One">Bug One</a></li>
<li>2 <a href="#Remotely_Connecting">Bug 2</a></li>
<li>3 <a href="#Trying_Some_Commands">Bug 3</a></li>
     
</ul>
</div>

<details open markdown="1">
<summary><h2 id="Bug_One">Bug One</h2></summary>

Code Change:
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-2/Bug_1_change.png" width="800"> <br>
Link to test file that causes symptom:
[https://github.com/cbaeucsd/markdown-parser/blob/main/testbreak2.md](https://github.com/cbaeucsd/markdown-parser/blob/main/testbreak2.md)<br>
Symptom of bug:
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-2/Bug_1_symptom.png" width="800">
</details>

<details open markdown="1">
<summary><h2 id="Remotely_Connecting">Remotely Connecting</h2></summary>

<p>We will now use the terminal in Visual Studio Code to connect to your course-specific account. Before we do however, there are some more things to set up.</p>  

<h3 id="Install_OpenSSH">Install OpenSSH (Windows only)</h3>
<p markdown="1">

If you are on Windows, install OpenSSH by following the instructions in this link <br>
[https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse](https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse). 

</p>
<p>You only need to do the steps in either <b>Install OpenSSH using Windows Settings</b> or <b>Install OpenSSH using PowerShell</b>.</p> 
<h3 id="Looking_Up_Your_Account">Looking Up Your Account</h3>
<p markdown="1">

You can lookup your course-specific account here: [https://sdacs.ucsd.edu/~icc/index.php](https://sdacs.ucsd.edu/~icc/index.php)

</p>
Enter your Username and Account ID in the red box. 
<img src="{{ site.baseurl}}/docs/assets/images/accountlookup.png" width="800"> <br><br>
Your account username is in the green box below. 
<img src="{{ site.baseurl}}/docs/assets/images/accountlookup2.png" width="800"> <br><br>
<p>Note: If you haven't already, reset your account password, using the temporary password given to you via email as your current password. </p>
<h3 id="Connecting_with_Visual_Studio_Code_Terminal">Connecting with Visual Studio Code Terminal</h3>
<p>Launch Visual Studio code. To access the terminal, press <code>Ctrl/Command</code> + <code>`</code>, or alternatively go to the top-left menu and select <br/> Terminal &#8594; New Terminal. You should see the terminal in the bottom half of the program like so:</p>
<img src="{{ site.baseurl}}/docs/assets/images/terminal.png" width="800"><br><br>

Now we will login with the command:
```
$ ssh accountusername@ieng6.ucsd.edu
```
where <code>accountusername</code> should be replaced with the previously retrieved name from the account lookup. <br>

Your login command will probably look something like this:
```
$ ssh cs15lsp22abc@ieng6.ucsd.edu
```
Note: Do not type or add the $ sign, it is just a symbol that means that shell is accepting commands. <br><br>
If you are connecting for the first time to this server, you will get this message:
```
The authenticity of host 'ieng6.ucsd.edu (128.54.70.238)' can't be established.
RSA key fingerprint is SHA256:ksruYwhnYH+sySHnHAtLUHngrPEyZTDl/1x99wUQcec.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
``` 
Type <code>yes</code> to continue.<br><br>
  
<p>After this command it will prompt you with a password which you will now enter. Don't worry if it looks like nothing is changing on the terminal, your password input is being properly received and the lack of response is a security feature.</p>  <br>
If you have inputed your login and password correctly, you should now see this in the terminal: <br>
<img src="{{ site.baseurl}}/docs/assets/images/successlogin.png" width="800">
</details>

<details open markdown="1">
  <summary><h2 id="Trying_Some_Commands">Trying Some Commands</h2></summary>
  
Now that we have successfully logged in, we will now try some commands. Try running:

```
$ cd
$ ls
$ pwd
$ mkdir
$ cp
```

on the terminal. Afterwards, log out of the remote server and try these commands again. Note what each command does while logged into the remote server and on your computer. <br><br>
Hint: to log out of the remote server, you can either:<br>
<ul>
<li>Press <code>Ctrl</code> + <code>D</code></li>
<li>Run the command <code>exit</code></li>
</ul><br>
<details open markdown="1">
  <summary><h3>Testing Summary</h3></summary>
  <img src="{{ site.baseurl}}/docs/assets/images/commandstest.png" width="800"><br>
  - <code>cd</code>: Change Directory is used to change the current working directory, however in this case it did nothing without an operand.
  - <code>ls</code>: List is used to list the files in the working directory. 
  - <code>pwd</code>: Print Working Directory prints the current working directory.
  - <code>mkdir</code>: Make Directory makes a new directory in the current working directory, however in this case it did nothing without an operand.
  - <code>cp</code>: Copy copies a source file/directory to a destination file/directory, however however in this case it did nothing without an operand.
  </details>
  <hr>
    
Some more specific useful commands you can try are:
```
$ cd ~
$ ls -lat
$ ls -a
$ ls &lt;directory&gt;
$ cp /home/linux/ieng6/cs15lsp22/public/hello.txt ~/
$ cat /home/linux/ieng6/cs15lsp22/public/hello.txt  
```

where <code>&lt;directory&gt;</code> is <code>/home/linux/ieng6/cs15lsp22/cs15lsp22abc</code>, where the abc is one of the other group members’ username.

Note what happens and try to guess what these commands do. <br><br>
Terminal output after some tests on the server:
<img src="{{ site.baseurl}}/docs/assets/images/testing.png" width="800">    
</details>

<script src="{{ site.baseurl}}/js/autoopendetails.js"></script>
