<h1>Testing Markdown Parse - Part 2</h1>
We will test and analyze our Markdown Parse with help from vimdiff. <br>

[My Markdown Parse Link](https://github.com/cbaeucsd/markdown-parser)  <br>
[Shared CSE15L Markdown Parse Link](https://github.com/nidhidhamnani/markdown-parser) <br>
We will assume that we want our Markdown Parse to only output links that would be hyperlinked.

Using Vimdiff, we can see many files that have different outputs for my Markdown Parse and the shared one. For this assignment we will look at test files 14 and 194.md. <br>
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-5/vimdiff.png" width="800"> <br>

<div id="toc_container">
<p class="toc_title">Contents</p>
<ul class="toc_list">
<li>1 <a href="#T_1">14.md</a></li>
<li>2 <a href="#S_2">194.md</a></li>
     
</ul>
</div>

<details open markdown="1">
<summary><h2 id="T_1">14.md</h2></summary>
[14.md](https://github.com/nidhidhamnani/markdown-parser/blob/main/test-files/14.md) <br>

Preview of 14.md<br>
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-5/14preview.png" width="800"> <br>
We can see that Markdown Parse should produce <br>
[] <br><br>


<img src="{{ site.baseurl}}/docs/assets/images/lab-report-5/14results.png" width="800"> <br>
With vimdiff, we can see that our Markdown Parse produced [], the correct result, while the shared Markdown Parse created [/foo], which is incorrect.

This test file causes a incorrect result for the shared Markdown Parse as it does not account for backslashes before the bracket. Since backslash is an escape character, it does not cause Markdown to create a hyperlink with the syntax that is typically associated with it. 

<img src="{{ site.baseurl}}/docs/assets/images/lab-report-5/14fix.png" width="800"> <br>
We could potentially add a check for the escape character within or after the check to see if all needed syntax characters are there(highlighted).

</details>

<details open markdown="1">
<summary><h2 id="T_2">194.md</h2></summary>
[194.md](https://github.com/nidhidhamnani/markdown-parser/blob/main/test-files/194.md) <br>

Preview of 194.md<br>
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-5/194preview.png" width="800"> <br>
We can see that Markdown Parse should produce <br>
[my_(url)] <br><br>


<img src="{{ site.baseurl}}/docs/assets/images/lab-report-5/194results.png" width="800"> <br>
With vimdiff, we can see that our Markdown Parse produced [], the correct result, while the shared Markdown Parse created [url], Both are incorrect.

This test file causes a incorrect result for both Markdown Parses because the syntax used is very different from the simple brackets and parenthesis we have previously checked for. With this syntax, it is extremely improbable that a correct result from either parser will be created.

<img src="{{ site.baseurl}}/docs/assets/images/lab-report-5/194fix.png" width="800"> <br>
To account for this case would require a massive amount of new code, the current highlighted area should be moved to a helper method, and a new helper method to account for this 'new' syntax case would have to be created, which can take up to hundreds of lines of code, if we also include the fact that we need to add code to distingush which helper method to use. 

</details>

<script src="{{ site.baseurl}}/js/autoopendetails.js"></script>
