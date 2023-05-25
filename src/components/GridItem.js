import React from 'react';
import { 
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    IconButton
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { LoremIpsum } from 'react-lorem-ipsum';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const useStyles = makeStyles()((theme) => {
    return {
        cardImage: {
            height: 300
        }
    };
});

export default function GridItem(props) {
    const { classes } = useStyles();
    return (
        <Card>
            <CardHeader 
                title={props.title}
                subheader={props.subheader}
            />
            <CardMedia 
                className={classes.cardImage}
                image={props.image}
            />
            <CardContent>
                <LoremIpsum p={1} />
            </CardContent>
            <CardActions>
                <IconButton>
                    <ArrowForwardIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}