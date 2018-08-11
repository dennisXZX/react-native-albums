import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends React.Component {
    state = {
        albums: []
    };

    componentDidMount () {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((res) => {
                this.setState({
                    albums: res.data
                });
            })
    }

    renderAlbums () {
        return this.state.albums.map(album => {
            return <AlbumDetail key={album.title}
                                album={album} />
        })
    }

    render () {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )
    }
};

const styles = StyleSheet.create({
    scrollViewStyle: {
        flex: 1
    }
});

export default AlbumList;