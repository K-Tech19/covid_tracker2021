import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import Countup from "react-countup"
import styles from './Tiles.module.css'
import cx from 'classnames';


const Tiles = ({data: {confirmed, recovered, deaths, lastUpdate }}) => {
    // console.log(props) // checking to see if the data carries over from App.js

    if(!confirmed) {
        return 'Loading please wait'
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="space-between" color="black">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.confirmed)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Confirmed </Typography>
                        <Typography variant={"h5"} >
                            <Countup
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator={","}
                            />
                        </Typography>
                        <Typography color={"textSecondary"}> {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant={"body2"} > # of actve cases of COVID-19 </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Recovered </Typography>
                        <Typography variant={"h5"}>
                        <Countup
                            start={0}
                            end={recovered.value}
                            duration={2.5}
                            separator={","}
                            />
                            </Typography>
                        <Typography color={"textSecondary"} >{new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant={"body2"} > # of recovered cases of COVID-19 </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Deaths </Typography>
                        <Typography variant={"h5"} >
                        <Countup
                            start={0}
                            end={deaths.value}
                            duration={2.5}
                            separator={","}
                            />
                            </Typography>
                        <Typography color={"textSecondary"} >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant={"body2"} > # of deaths to COVID-19 </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Tiles;