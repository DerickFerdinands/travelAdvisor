import React from "react";
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
import useStyles from './styles';

export const PlaceDetails = ({place})=>{
    const classes = useStyles();
    return<>
        <Card elevation={6}>
            <CardMedia
            style={{height:350}}
            image={place.photo?place.photo.images.large.url:'https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg'}
            title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant={'h5'}>{place.name}</Typography>

                <Box display={'flex'} justifyContent={'space-between'}>
                    <Rating size={'small'} value={Number(place.rating)} readOnly/>
                    <Typography gutterBottom variant={"subtitle1"}>Out Of {place.num_reviews} reviews</Typography>
                </Box>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Typography variant={"subtitle1"}>Price</Typography>
                    <Typography gutterBottom variant={"subtitle1"}>{place.price_level}</Typography>
                </Box>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Typography variant={"subtitle1"}>Ranking</Typography>
                    <Typography gutterBottom variant={"subtitle1"}>{place.ranking}</Typography>
                </Box>
                {
                    place?.awards?.map((award)=>(
                        <Box my={1} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                            <img src={award.images.small} alt={award.display_name}/>
                            <Typography variant={"subtitle2"} color={'textSecondary'}>{award.display_name}</Typography>
                        </Box>
                    ))
                }
                {
                    place?.cuisine?.map(({name})=>(
                    <Chip key={name} size={'small'} label={name} className={classes.chip}/>
                    ))
                }

                {
                    place?.address && (
                        <Typography gutterBottom variant={'subtitle2'} color={'textSecondary'} className={classes.subtitle}>
                            <LocationOnIcon/>{place.address}
                        </Typography>
                    )
                }

                {
                    place?.phone && (
                        <Typography gutterBottom variant={'subtitle2'} color={'textSecondary'} className={classes.spacing}>
                            <PhoneIcon/>{place.phone}
                        </Typography>
                    )
                }

                <CardActions>
                    <Button size={'small'} color={'primary'} onClick={()=>{window.open(place.web_url,'_blank')}}>
                        Trip Advisor
                    </Button>
                    <Button size={'small'} color={'primary'} onClick={()=>{window.open(place.website,'_blank')}}>
                        Web Site
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    </>
}