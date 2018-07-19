
const styles = theme => ({
    root: {
        marginTop: -theme.spacing.unit/2,
        //marginBottom: theme.spacing.unit*3,
        marginLeft: theme.spacing.unit*2,
        marginRight: theme.spacing.unit*2,
        paddingTop: theme.spacing.unit*4,
        paddingBottom: theme.spacing.unit*2,
        paddingLeft: theme.spacing.unit*3,
        paddingRight: theme.spacing.unit*3,
        border: '1px solid #e4e4e4',
        borderRadius: '4px',
        boxShadow: '0px 3px 5.88px 0.12px rgba(156, 156, 156, 0.18)',
    },
    cssTitleCard: {
        marginTop: '-36px',
        marginBottom: theme.spacing.unit*2,
        '& b': {
            backgroundColor: '#fff',
            fontSize: '0.75rem',
            color: '#939393',
            marginLeft: -theme.spacing.unit,
            paddingLeft: theme.spacing.unit,
            paddingRight: theme.spacing.unit,
        },
    },

    cssContentCard: {

    }


});

export default styles;