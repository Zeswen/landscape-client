import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { HeaderContainer, LogoText, LogoImage, BurgerMenu, BurgerMenuImg } from './PageHeader.styled'

export default class PageHeader extends Component {
    state = {
        isMenuVisible: false
    }

    handleMenu = () => {
        this.setState(prevState => ({
            ...prevState,
            isMenuVisible: !this.state.isMenuVisible
        }))
    }

    render() {
        return (
            //@TODO: Input on logo text. P on start, onclick input
            <HeaderContainer
                backgroundColor={this.props.backgroundColor}
                backgroundAlpha={this.props.backgroundAlpha}
                position={this.props.position}
                height={this.props.height}
                paddingV={this.props.paddingV}
                paddingH={this.props.paddingH}
                opacity={this.props.opacity}
                filter={this.props.filter}
                filterPercentage={this.props.filterPercentage}
                hasMenu={this.props.hasMenu}
                isReverse={this.props.isReverse}
                fontFamily={this.props.fontFamily}
                fontSize={this.props.fontSize}
                color={this.props.color}
                alpha={this.props.alpha}
            >
                {this.props.imgUrl
                    ? <LogoImage src={this.props.imgUrl} alt="logo" />
                    : <LogoText>{this.props.title}</LogoText>
                }
                {this.props.hasMenu && (
                <React.Fragment>
                    {!this.state.isMenuVisible && <BurgerMenuImg onClick={this.handleMenu} menuSize={this.props.menuSize} src={require('../../../images/menu.png')} alt='burgerMenu' />}
                    <BurgerMenu 
                    menuBackgroundColor={this.props.menuBackgroundColor} 
                    menuBackgroundAlpha={this.props.menuBackgroundAlpha} 
                    viewHeight={this.props.viewHeight} 
                    isMenuVisible={this.state.isMenuVisible}
                    >
                        <img src={require('../../../images/close.png')} alt="closeMenu" onClick={this.handleMenu} />
                        {this.props.structure.sections.map(elem => (
                            <li key={elem.id}><Link to={`#${elem.id}`}>{elem.title}</Link></li>
                        ))}
                    </BurgerMenu>
        
                </React.Fragment>
                )}
            </HeaderContainer>
        )
    }
}
