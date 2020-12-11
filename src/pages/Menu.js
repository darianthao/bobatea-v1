import React from 'react';
import '../components/MenuSlider/MenuSlider.css'
import ImageSlider from '../components/MenuSlider/ImageSlider';
import { SliderData } from '../components/MenuSlider/SliderData';

export default function Menu() {
    return <ImageSlider slides={SliderData} />;
}