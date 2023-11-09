import { HtmlEditor, Image, Link, QuickToolbar, RichTextEditorComponent, Toolbar, Inject } from '@syncfusion/ej2-react-richtexteditor';
import { Header } from '../components';

const Editor = () => {
    return (
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Apps" title="Editor" />
            <RichTextEditorComponent height='500px'>
                <Inject services={[ HtmlEditor, Image, Link, QuickToolbar, Toolbar ]} />
            </RichTextEditorComponent>
        </div>
    )
}

export default Editor