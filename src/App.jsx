import * as React from "react";

//Imports
import { CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { AppBar, Toolbar, Container, Grid2, Button , Card} from "@mui/material";

//Icons
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

//Some Styles
import { styled } from "@mui/material/styles";

 const  ButtonComponent = styled("div")(({theme}) => ({
	backgroundColor: theme.palette.background.paper,

}));
 const  ButtonStyles = styled(Button)(() => ({
    marginTop: "50px",
    marginBottom: "40px"
}));


///Creating An Array Of Images.
const cardImg = [
  {
    id: 1,
    imageUrl: "https://i.pinimg.com/236x/ff/3e/70/ff3e70f485d5c59886256d78d10c2949.jpg",
    title:"Food Served",
    description: "There is food is my favourite"
  },
  {
    id: 2,
    imageUrl: "https://i.pinimg.com/236x/d4/4e/71/d44e710608b401537a53dee3b968d884.jpg",
    title:"Nice Art",
    description: "Where focus goes , energy flows"
  },
  {
    id: 3,
    imageUrl: "https://i.pinimg.com/236x/d7/c0/49/d7c04913b0d8a21ad79e13c7c211a4e3.jpg",
    title:"Nice Car",
    description: "There car your fada cannnot afford"
  },
  {
    id: 4,
    imageUrl: "https://i.pinimg.com/236x/51/6e/8e/516e8e83ca4e4387f2eb241f85d3096f.jpg",
    title:"Future Leader",
    description: "Smoking like nobody's business"
  },
  {
    id: 5,
    imageUrl: "https://i.pinimg.com/236x/cc/97/b6/cc97b63360eda7fc32837c12cd9b2ee3.jpg",
    title:"Loner",
    description: "Remain a loner till till till"
  },
  {
    id: 6,
    imageUrl: "https://i.pinimg.com/236x/6e/68/77/6e6877f44661215c23ed35352b624284.jpg",
    title:"Flower",
    description: "Lily of the garden"
  },
  {
    id: 7,
    imageUrl: "https://i.pinimg.com/236x/e3/86/e7/e386e794ea3207a0417125f37879039b.jpg",
    title:"Nobody",
    description: "Nobody cares until you're rich, dead or pretty"
  },
  {
    id: 8,
    imageUrl: "https://i.pinimg.com/474x/fa/97/1a/fa971a9c56115c79da60bcad0f3408ff.jpg",
    title:"Guess",
    description: "Don't freaking care"
  },
  {
    id: 9,
    imageUrl: "https://i.pinimg.com/474x/d9/2d/bd/d92dbdd25f892a82d935c70f9c963f97.jpg",
    title:"Teddy Bear",
    description: "This Teddy Bear Looks good"
  }
 
]

export default function App() {
	return (
		<React.Fragment>
			<CssBaseline>
				<AppBar position="sticky">
					<Toolbar>
						<PhotoCameraIcon />
						<Typography variant="h6">Photo Album</Typography>
					</Toolbar>
				</AppBar>
				<main>
							<div>
                
               <ButtonComponent>
								<Container maxWidth="sm">
									<Typography variant="h2" align="center" color="textPrimary" gutterBottom>
										Photo Album
									</Typography>
									<Typography variant="h5" align="center" color="textSecondary" component="p" gutterBottom>
										Hello everyone, this is a photo album and I'm trying to make it as long as
                     possible so we can see how it looks like on the screen
									</Typography>
									<div>
										<Grid2 container justifyContent="center" spacing={3}>
											<Grid2>
												<ButtonStyles variant="contained" color="primary">
													See my photos
												</ButtonStyles>
											</Grid2>
											<Grid2>
												<ButtonStyles variant="outlined" color="primary">
													Secondary action
												</ButtonStyles>
											</Grid2>
										</Grid2>
									</div>
                  
								</Container>
                </ButtonComponent>
							</div>
              <Container maxWidth="md"
              sx={(theme)=>({
                marginTop: "7rem",
                bgcolor: theme.palette.background.paper,
              })

              }>
                <Grid2 container gap={2}>
                  {cardImg.map((card) => (
                  <Grid2 item="true"  key={card.id} xs={12} sm={6} md={4} lg={2} maxWidth="lg">  
                  <Card sx=
                  {{ padding: "20px 0" }}>
                      <CardMedia
                      component="img"
                      src={card.imageUrl}
                      alt="Image title"
                      sx={{
                        height: "auto",
                        width: "100%",
                        objectFit: "cover",
                        maxHeight: "200px",
                       
                      }}
                      />
                      <CardContent sx={{ flexGrow: "1"}}>
                        <Typography gutterBottom variant="h5">
                           {card.title}
                        </Typography>
                        <Typography>
                         {card.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">View</Button>
                        <Button size="small" color="primary">Edit</Button>
                      </CardActions> 
                  </Card>
                  </Grid2>
                  ))} 

                </Grid2>

        </Container>
				</main>
			</CssBaseline>
     
		</React.Fragment>
	);
}
