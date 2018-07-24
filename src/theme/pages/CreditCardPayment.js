//const bodyW = 414;
//let windowH = window.innerHeight;
let windowW = window.innerWidth;
let k = 1;
if(windowW <= 414 && windowW > 320){
    k = windowW/320;
}
if(windowW > 414){
    k = 414/320;
}
if(windowW <= 320){
    k=1;
}

const styles = theme => ({
    myPaper: {
        paddingTop: k*(56+theme.spacing.unit*2),
        paddingLeft: k*theme.spacing.unit*2,
        paddingRight: k*theme.spacing.unit*2,
        height: '100vh',
        backgroundColor: '#fcfcfc'
    },
    caption: {
        color: '#939393',
        fontSize: 0.75*k + 'rem',
        fontWeight: 500,
        //textTransform: 'uppercase'
    },
    cssUnderline: {
        '&:after': {
            borderBottomColor: '#846f8f',
        },
    },
    cssInput: {
        fontSize: 0.85*k + 'rem',
        fontWeight: 500,
        paddingLeft: theme.spacing.unit
    },
    marginBottom: {
        marginBottom: 15
    },
    myBtn: {
        textTransform: 'none',
    },
    linkButton: {
        display: 'block',
        textDecoration: 'none',
        textAlign: 'center',
        color: 'rgba(136, 118, 80, 0.76)',
        borderRadius: 6,
        border: '1px solid rgba(136, 118, 80, 0.76)',
        paddingTop: k * theme.spacing.unit * 2,
        paddingBottom: k * theme.spacing.unit*2,
    },
    linkButtonActive: {
        display: 'block',
        textDecoration: 'none',
        textAlign: 'center',
        color: '#fff',
        borderRadius: 6,
        backgroundColor: 'rgba(136, 118, 80, 0.76)',
        paddingTop: k * theme.spacing.unit*2,
        paddingBottom: k * theme.spacing.unit*2,
    },
    linkButtonCaption: {
        fontSize: 0.875*k + 'rem',
        color: 'inherit',
        fontWeight: 500,
    },
});

export default styles;
