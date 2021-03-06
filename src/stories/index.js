// @flow
import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, select, boolean, object } from '@storybook/addon-knobs/react';
import { BrowserRouter, Route } from 'react-router-dom';
import { withReadme } from 'storybook-readme';

import transitionNotes from '../components/notes/transitionNotes.md';

import ImageLoad from '../components/ImageLoad';
import ImageLoadingBar from '../components/ImageLoadingBar';
import HorizontalPassButton from '../components/HorizontalPassButton';
import { RouteSwitch, DemoLayout } from '../components/router.demo';
import PageTransition from '../components/PageTransition';

storiesOf('Images', module)
    .addDecorator(withKnobs)
    .addWithJSX('Imageload', () => (
        <ImageLoad
            src={text('src', 'https://picsum.photos/960/540?random')}
            src2x={text('src2x', 'https://picsum.photos/1920/1080?random')}
            alt={text('alt', 'Image alt text')}
            ratio={number('ratio', 16 / 9)}
            color={text('color', '#222')}
            direction={select('direction', ['top', 'right', 'bottom', 'left'], 'left')}
            onLoad={() => {
                console.log('onload');
            }}
            onError={() => {
                console.log('onError');
            }}
        />
    ))
    .addWithJSX('ImageloadingBar', () => (
        <ImageLoadingBar
            src={text('src', 'https://picsum.photos/960/540?random')}
            src2x={text('src2x', 'https://picsum.photos/1920/1080?random')}
            alt={text('alt', 'Image alt text')}
            ratio={number('ratio', 16 / 9)}
            color={text('color', '#222')}
            width={text('width', '100%')}
            height={text('height', '4px')}
            direction={select('direction', ['top', 'right', 'bottom', 'left'], 'left')}
            position={select('position', ['top', 'right', 'bottom', 'left', 'center'], 'top')}
            onLoad={() => {
                console.log('onload');
            }}
            onError={() => {
                console.log('onError');
            }}
        />
    ));

storiesOf('Buttons', module)
    .addDecorator(withKnobs)
    .addWithJSX('Horizontal pass', () => (
        <HorizontalPassButton
            type={select('type', ['stay', 'disappear'], 'stay')}
            direction={select('direction', ['right', 'left'], 'right')}
        >
            {text('label', 'Click!')}
        </HorizontalPassButton>
    ));

storiesOf('Page transition', module)
    .addDecorator(withKnobs)
    .addDecorator(withReadme(transitionNotes))
    .addWithJSX('PageTransition', () => (
        <BrowserRouter>
            <Route render={({ location }) => (
                <DemoLayout>
                    <PageTransition
                        animation={select('animation', ['fade'], 'fade', 'transition')}
                        backgroundColor={text('backgroundColor', '#ddd')}
                        duration={object('duration', {
                            in: 0.5,
                            out: 0.3
                        }, 'duration')}
                        initialAnimation={boolean('initialAnimation', true)}
                    >
                        <RouteSwitch location={location}/>
                    </PageTransition>
                </DemoLayout>
            )}/>
        </BrowserRouter>
    ));
