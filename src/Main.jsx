"use strict";
import React from 'react';

function withProps(props) {
    return React.Children.map(this,(el) => React.cloneElement(el, props));
}

function xy(x,y){
    return `translate(${x},${y})`;
}

class HierarchyDiagram {
    render () {
        const { width, children} = this.props;
        const height = 800;

        return (
            <svg width={width} height={height}>
                {children::withProps({width})}
            </svg>
        );
    }
}

class Branch {
    render () {
        const { width, name, children } = this.props;

        return (
            <g>
                <Node width={width}>{name}</Node>
                <line x1={width/2} x2={width/2}
                      y1={30}      y2={50}
                      stroke="black"/>
                <g transform={xy(0,50)}>
                    {children::withProps({width})}
                </g>
            </g>
        );
    }
}

class Node {
    render () {
        const { width } = this.props;
        return (
            <g>
                <rect width={width} height={30}
                    stroke="black" fill="white"/>
                <text x={width/2} y={20}
                    textAnchor="middle">{this.props.children}</text>
            </g>
        );
    }
}

export default class Main extends React.Component {
    render () {
        return (
            <section>
                <header>
                    <h1>Hashtags for Humans</h1>
                </header>
                <section>
                    <p>Humans are pattern matching machines. The world around us is vast and incomprehensible, but we are able to make some sense of it by organizing messy reality into neat categories. We dismantle complex concepts and individuals into their constituent traits, to match them to prototypes, archetypes and stereotypes. </p>

                    <p>Categories and hierarchies are built into our culture at the lowest levels: genders are baked into nouns and pronouns; family lineage -- literally, "the patriarchy" -- is written into our names. When we give names to abstract concepts; when we say these are dogs and these are rocks and these are songs, we are categorizing.</p>
                </section>
                <section>
                    <p>Categories are rules for identity. The only thing we love more than making rules is making rules for making rules, so we make formal systems to manage our hierarchies.</p>

                    <HierarchyDiagram width={200}>
                        <Branch name="Genus">
                            <Node>Species</Node>
                        </Branch>

                    </HierarchyDiagram>

                    <p>These systems reflect the times in which they are created. Linnaeus' hierarchy of life -- kingdom phylum class order family genus species -- is an echo of king prince duke count baron knight peasant. What would a taxonomy look like if we created it today?</p>
                </section>
            </section>
        );
    }
}
