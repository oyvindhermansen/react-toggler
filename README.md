# React Toggler

Super simple toggler component that gives you complete control of the rendering.

this is how it works:

```jsx
const App = () => {
  return (
    <Toggler>
      {({ 
        open, 
        handleOpen, 
        handleClose, 
        handleToggle 
      }) => {
        return (
          <div>
            <button onClick={handleOpen}>Open</button>
            <button onClick={handleClose}>Close</button>
            <button onClick={handleToggle}>Toggle</button>

            {open && (
              <div>
                <p>Here lives the content to be toggled</p>
              </div>
            )}
          </div>
        )
      }}
    </Toggler>
  )
}
```

> The component also has a `defaultOpen` prop if you want to control the initial state of the toggler
