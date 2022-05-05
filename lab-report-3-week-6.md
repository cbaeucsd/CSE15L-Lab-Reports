<h1>Implementing Group Choices</h1>
This lab report will go over the process of implementing the three group choices from Lab 5. <br>
<div id="toc_container">
<p class="toc_title">Contents</p>
<ul class="toc_list">
<li>1 <a href="#GC_1">Group Choice 1 – Streamline ssh Configuration</a></li>
<li>2 <a href="#GC_2">Group Choice 2 – Set up Github Access from ieng6</a></li>
<li>3 <a href="#GC_3">Group Choice 3 – Copy Whole Directories with scp -r
</a></li>
     
</ul>
</div>

<details open markdown="1">
<summary><h2 id="GC_1">Group Choice 1 – Streamline ssh Configuration</h2></summary>

We create a config file in the .ssh folder using notepad.
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-3/creating_config.png" width="800"> <br><br>
We then test if we can now login using the simplified method<br>
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-3/login.png" width="800"><br><br>
Seeing that we succesfully logged in, we now test scp with this simplified method.
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-3/scp.png" width="800"><br><br>
Success!
</details>

<details open markdown="1">
<summary><h2 id="GC_2">Group Choice 2 – Set up Github Access from ieng6</h2></summary>
We create and move the SSH key files to our account.
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-3/rsa_location.png" width="800"> <br><br>
After following the instructions, we set up the SSH key on our Github account.
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-3/rsa_github.png" width="800"> <br><br>
To test if our keys work, we commit and push from our ieng6 account.
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-3/gitcommit.png" width="800"> <br><br>
Success! We can see the commit here:<br>
[https://github.com/cbaeucsd/markdown-parser/commit/870ed6612eca523d47591542495d25efc3636e1f](https://github.com/cbaeucsd/markdown-parser/commit/870ed6612eca523d47591542495d25efc3636e1f)
</details>

<details open markdown="1">
  <summary><h2 id="GC_3">Group Choice 3 – Copy Whole Directories with scp -r</h2></summary>
  We use scp recursively to copy the contents to a markdown-parse folder in our account.
  <img src="{{ site.baseurl}}/docs/assets/images/lab-report-3/recursivescp.png" width="800"> <br><br>
  We now test our markdown-parse from our account.
  <img src="{{ site.baseurl}}/docs/assets/images/lab-report-3/runningtests.png" width="800"> <br><br>
  We can do everything in one line like so:
  ```
  scp -r . ieng6:~/markdown-parse;ssh ieng6 "cd markdown-parse;/software/CSE/oracle-java-17/jdk-17.0.1/bin/javac -cp .:lib/junit-4.13.2.jar:lib/hamcrest-core-1.3.jar MarkdownParseTest.java;/software/CSE/oracle-java-17/jdk-17.0.1/bin/java -cp .:lib/junit-4.13.2.jar:lib/hamcrest-core-1.3.jar org.junit.runner.JUnitCore MarkdownParseTest";
  ```
  <img src="{{ site.baseurl}}/docs/assets/images/lab-report-3/runall.png" width="800"> <br><br>
</details>

<script src="{{ site.baseurl}}/js/autoopendetails.js"></script>
