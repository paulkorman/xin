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
    root: {
        marginTop: -k*theme.spacing.unit/2,
        //marginBottom: theme.spacing.unit*3,
        marginLeft: k*theme.spacing.unit*2,
        marginRight: k*theme.spacing.unit*2,
        paddingTop: k*theme.spacing.unit*4,
        paddingBottom: k*theme.spacing.unit*2,
        paddingLeft: k*theme.spacing.unit*3,
        paddingRight: k*theme.spacing.unit*3,
        border: '1px solid #e4e4e4',
        borderRadius: '4px',
        boxShadow: '0px 3px 5.88px 0.12px rgba(156, 156, 156, 0.18)',
    },
    cssTitleCard: {
        marginTop:  -k*0.75-k*1.3 + 'rem',
        marginBottom: theme.spacing.unit*5,
        '& b': {
            backgroundColor: '#fff',
            fontSize: k*0.75 + 'rem',
            color: '#939393',
            marginLeft: -k*theme.spacing.unit,
            paddingLeft: k*theme.spacing.unit,
            paddingRight: k*theme.spacing.unit,
        },
    },

    cssContentCard: {

    }


});

export default styles;