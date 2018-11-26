import React, { Component } from 'react';

// const wrappClass = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             {/* aby przekazywac prowidłowo propsy do "opatulonego" componentu, musimy je przekazac uzywajac
//             operatore rozproszenia znanego z ES6 */}
//             <WrappedComponent {...props} />
//         </div>
//     );
// }

// powyżej zwracamy funkcje, poniżej jakos component stworzony za pomoca extends
const wrappClass = (WrappedComponent, className) => {
    const WrappClass = class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent ref={this.props.forwardRef} {...this.props} />
                </div>
            )
        }
    }

    // tworzenie tunelu z propsami przez komponent w który "opatulamy wszystkie nasze Persony"
    return React.forwardRef((props, ref) => {
        return <WrappClass {...props} forwardRef={ref} />
    });
}

export default wrappClass;