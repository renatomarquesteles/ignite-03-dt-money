Why does a React component renders?
- Hooks changed
- Props changed
- Parent rerendered

What's the render flow?
1. React recreates the new HTML of the component in the memory
2. It compares the recreated HTML with the previous rendered version
3. If something has changed it rewrites the HTML on the screen

When a component is rerendered all it's variables and functions are recreated in the memory
- The hook useCallback prevents functions to be recreated if their dependencies didn't change
- The useContextSelector prevents that the component gets rerendered if the watched property
  from the context didn't change

Memo adds a new step in the render flow (step 0)
- If hooks or props changed -> deep comparison
  - Compares with the previous version of hook/prop
    - If something has changed it will allow the new render and continue the render flow

* Memo is only needed for components with a large HTML tree,
  which can cause slowness during the comparison process in the render flow

If the component's HTML isn't large enough, using Memo can actually degrade performance
and unnecessarily increase code complexity

That happens because the React HTML recreation can be faster than the hooks/props comparison itself

The useMemo hook is the same as Memo, but for the component's variables
- It should be used for variables that take a long time to proccess to get a result
  - usually involves calculatings