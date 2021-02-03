import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles({
    root:{
        minWidth:275,
    },
    bullet:{
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title:{
        fontSize: 14,
    },
    pos:{
        marginBottom: 12,
    },
})

const CoffeCard = (props) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>.</span>
    const { avatarUrl, title, price, description, imageUrl} = props;
    

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar src={avatarUrl}/>                    
                }
                action={
                    <IconButton aria-label="settings">
                        <ShareIcon />
                    </IconButton>
                }
                title= { title }
                subheader= { price }
            />
            <CardMedia style={{ height:'150px'}} image = {imageUrl}            />
            <CardContent>
                <Typography variant='body2' component ='p' >                   
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>BUY NOW</Button>
                <Button size='small'>OFFER</Button>
            </CardActions>
        </Card>
    )
}; export default CoffeCard;