import React, {useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui-core'

import styles from './CountrySelector.module.css';

const CountrySelector = () => {
    return (
        <FormControl className={styleMedia.formControl}>
            <NativeSelect>
                <option value="global" >Global

                </option>
            </NativeSelect>
        </FormControl>
    )
}

export default CountrySelector;