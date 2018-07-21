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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: k*theme.spacing.unit*2,
        paddingRight: k*theme.spacing.unit*2,
        height: '100vh',
        backgroundColor: '#fcfcfc',
        textAlign: 'center'
    },
    iconComplete: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: k*theme.spacing.unit*16,
        width: k*theme.spacing.unit*16,
        borderRadius: k*theme.spacing.unit*16/2,
        backgroundColor: 'rgba(173,173,114, 0.8)',
        color: '#fff',
        marginBottom: k*theme.spacing.unit*5,
    },
});

export default styles;
