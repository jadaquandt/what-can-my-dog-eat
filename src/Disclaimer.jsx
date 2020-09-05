import React, { Component } from 'react'

export class Disclaimer extends Component {
    render() {
        return (
            <footer id="disclaimerFooters">
                    <i className="fas fa-exclamation-triangle"></i>
                    <p>
                        Please note, the sole purpose of this website’s content is to inform, 
                        not to provide any kind of medical advice. Always consult with your vet 
                        regarding your dog’s diet, especially if she has medical problems. 
                        By using this website and reading this website’s content, you understand 
                        and accept our disclaimer.
                    </p>
            </footer>
        )
    }
}

export default Disclaimer
