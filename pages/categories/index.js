// const fs = require('fs');
const path = require('path');

import { database } from '../../DataManagement/firebase/firebase';

export default function Categories({ data }) {
    // const data = database
    console.log(data)
    return ( 
        <section className="catergory">
            <h1>catergory page</h1>
        </section>
    )
}

export async function getStaticProps() {

    const res = await fetch('/Users/micahjohnson/Documents/Projects/audiophile/DataManagement/data/data.json');
    console.log(res)
    const data = await res.json();
    console.log(data)

    return {
        props: {
            data,
        }
    }
}