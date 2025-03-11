# javascript

learnjs

<h2> Javascript Execution Context </h2>
<p> The execution context is the environment in which a script is executed.</p>
<p> It is created when a script is invoked and is destroyed when the script is finished executing.</p>
<p> The execution context has two main components: the Lexical Environment and the Variable Environment.</p>
<p>
1.Global EC
2.Function EC
3. Eval EC
</p>br

{}

1.  -> memory creation phase . addresses is locate in this.
    -> memory allocation phase . memory is allocated in this.
    -> memory initialization phase . memory is initialized in this.
    -> memory deallocation phase . memory is deallocated in this.

2.  -> Execution Phase: This is the phase where the code is executed. The code is executed line by line from top to bottom. like arthemetic expession , logical expession, assignment expession, function call expession, etc.

<h1>some Dom selector</h1>
<p> example :-
1.document.querySelectorAll('h3')
2.const allH3 = document.querySelectorAll('h3')
3.allH3[2].innerText
4.allH3.forEach((h3)=>{
    h3.style.color = 'green'
})

5.allH3.forEach((h3)=>{
h3.style.color = 'black';
h3.style.backgroundColor = 'green';
h3.style.padding = '10px'
})

6.allH3.forEach((h3)=>{
h3.style.color = 'black';
h3.style.backgroundColor = 'green';
h3.style.padding = '10px';
h3.innerText = 'Abhi'
})

</p>
