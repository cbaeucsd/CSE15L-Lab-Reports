<h1>Testing Markdown Parse - Part 2</h1>
We will test and analyze our Markdown Parse with help from vimdiff. <br>

[My Markdown Parse Link](https://github.com/cbaeucsd/markdown-parser) <br>
We will assume that we want our Markdown Parse to only output links that would be hyperlinked.

<div id="toc_container">
<p class="toc_title">Contents</p>
<ul class="toc_list">
<li>1 <a href="#T_1">Test 1</a></li>
<li>2 <a href="#S_2">Test 2</a></li>
     
</ul>
</div>

<details open markdown="1">
<summary><h2 id="T_1">Test 1</h2></summary>

Markdown Parse should produce 
["\`google.com","google.com","ucsd.edu"].

<img src="{{ site.baseurl}}/docs/assets/images/lab-report-4/S1_testcode.png" width="800"> <br>
Test Code<br><br>
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-4/S1_mainfail.png" width="800"> <br>
Output of my repository, did not store any of the needed links<br><br>
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-4/S1_altfail.png" width="800"> <br>
Output of other group's repository, stored one incorrect link<br><br>
We would have to find the first \`, and check if it occurs between a bracket parenthesis pair. If it does,
we check if a second one occurs before the closed bracket or parenthesis, or after. If it happens after, then we disregard it. 
If the first \` happens outside a bracket parenthesis pair, we must then disregard everything between it and the second \`.
We repeat finding "first" and "second" \` until we finish reading the file.
We must also alter our overspecific isValidURL method to account for this character.
Overall, this would take a lot more than 10 lines of code.


</details>

<details open markdown="1">
<summary><h2 id="T_2">Test 2</h2></summary>
Markdown Parse should produce 
["a.com","a.com(())","example.com"].

<img src="{{ site.baseurl}}/docs/assets/images/lab-report-4/S2_testcode.png" width="800"> <br>
Test Code<br><br>
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-4/S2_mainfail.png" width="800"> <br>
Output of my repository, did not store any of the needed links<br><br>
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-4/S2_altfail.png" width="800"> <br>
Output of other group's repository, stored one link incorrectly<br><br>
We must alter our overspecific isValidURL method to account for non-typical URLs.
Otherwise, the main thing we need to fix would be for nested parenthesized URLs. We would have to count how many ( are after the first, and make sure we get the full link at the right ). If there aren't enough ) for each (, we do not have a valid hyperlink. This part could potentially be done in around 13-20 lines of code. 

</details>


<script src="{{ site.baseurl}}/js/autoopendetails.js"></script>
