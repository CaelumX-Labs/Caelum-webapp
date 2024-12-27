'use client';
import {HeroSection} from './components/section/HeroSection';
import {NavBar} from './components/section/NavBar';
import {Headers} from './components/section/Header';
import {Vission} from './components/section/Vission';
import {Collaboration} from './components/section/Collaboration';
import {Feature} from './components/section/Feature';
import {Progress} from './components/section/Progress';
import {Testimonials} from './components/section/Testimonials';
import {Questions} from './components/section/Questions';
import {GetInTouch} from './components/section/GetInTouch';
import {Footer} from './components/section/Footer';


export default function Home() {
    return (
        <>
            <NavBar />
            <Headers />
            <HeroSection />
            <Vission />
            <Collaboration />
            <Feature />
            <Progress />
            <Testimonials />
            <Questions />
            <GetInTouch />
            <Footer />
        </>
    );
}
