import classes from './MyButton.Module.css'

function MyButton ({children, ...props})   {
 
    return(
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    )

}

export default MyButton;