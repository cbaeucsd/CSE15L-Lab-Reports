
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
 
