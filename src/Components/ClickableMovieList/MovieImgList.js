import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
//import itemData from './itemData';
import image from '../../Assets/Loki.png'
import image2 from '../../Assets/Rangbaaz.png'
import image3 from '../../Assets/Movie3.png'
import image4 from '../../Assets/Bajirao.png'
import LokiCard from './ClickableCard1';
import RangbaazCard from './ClickableCard2';
import StoriesCard from './ClickableCard3';
import BajiraoCard from './ClickableCard4';
import HerapheriCard from './ClickableCard5';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    height: '100%',
  },

  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    height: '100%',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  ImageListItem: {
    height: '100%', 
  }
}));


  
  const itemData = [
    {
    img: image,
     title: 'Image',
    author: 'author',
    },
   
  ];
  const itemData2 = [
    {
    img2: image2,
     title: 'Image',
    author: 'author',
    },
   
  ];
  const itemData3 = [
    {
    img3: image3,
     title: 'Image',
    author: 'author',
    },
   
  ];
  const itemData4 = [
    {
    img4: image4,
     title: 'Image',
    author: 'author',
    },
   
  ];
 
export default function SingleLineImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={1.75}>
      <ImageListItem className={classes.ImageListItem}>
       <LokiCard/>
      </ImageListItem>

      <ImageListItem>
       <RangbaazCard/>
      </ImageListItem>

      <ImageListItem>
       <StoriesCard/>
      </ImageListItem>

      <ImageListItem>
       <BajiraoCard/>
      </ImageListItem>

      <ImageListItem>
       <HerapheriCard/>
      </ImageListItem>

           {/* <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title} />
             <ImageListItemBar 
            title={item.title}
             classes={{
             root: classes.titleBar,
                 title: classes.title,
               }}
               actionIcon={
                 <IconButton aria-label={`star ${item.title}`}>
                   <StarBorderIcon className={classes.title} />
                 </IconButton>
               }
             />
            </ImageListItem>
         ))} 

         <LokiCard/>
         <RangbaazCard/>
         <StoriesCard/>
         <BajiraoCard/>
         <HerapheriCard/> */}

        {/* {itemData2.map((item) => (
          <ImageListItem key={item.img2}>
            <img src={item.img2} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${item.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </ImageListItem>
          <LokiCard/>
        ))}
        {itemData3.map((item) => (
          <ImageListItem key={item.img3}>
            <img src={item.img3} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${item.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
        {itemData3.map((item) => (
          <ImageListItem key={item.img4}>
            <img src={item.img4} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${item.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))} */}
      </ImageList>
    </div>
  );
}