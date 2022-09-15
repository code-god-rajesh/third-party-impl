import { useState } from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';

// NOTE: Use the edito r from source (not a build)!
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Link from '@ckeditor/ckeditor5-link/src/link';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
//import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
//import List from '@ckeditor/ckeditor5-list/src/list';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import { Card, Col, Row } from 'antd';

const colors = [
  {
    color: 'hsl(168, 76%, 42%)',
    label: 'Strong Cyan',
  },
  {
    color: 'hsl(145, 63%, 49%)',
    label: 'Emerald',
  },
  {
    color: 'hsl(204, 70%, 53%)',
    label: 'Bright Blue',
  },
  {
    color: 'hsl(283, 39%, 53%)',
    label: 'Amethyst',
  },
  {
    color: 'hsl(210, 18%, 37%)',
    label: 'Grayish Blue',
  },
  {
    color: 'hsl(48, 89%, 50%)',
    label: 'Vivid Yellow',
  },
  {
    color: 'hsl(168, 76%, 36%)',
    label: 'Dark Cyan',
  },
  {
    color: 'hsl(145, 63%, 42%)',
    label: 'Dark Emerald',
  },
  {
    color: 'hsl(204, 64%, 44%)',
    label: 'Strong Blue',
  },
  {
    color: 'hsl(282, 44%, 47%)',
    label: 'Dark Violet',
  },
  {
    color: 'hsl(210, 29%, 24%)',
    label: 'Desaturated Blue',
  },
  {
    color: 'hsl(37, 90%, 51%)',
    label: 'Orange',
  },
  {
    color: 'hsl(28, 80%, 52%)',
    label: 'Carrot',
  },
  {
    color: 'hsl(6, 78%, 57%)',
    label: 'Pale Red',
  },
  {
    color: 'hsl(192, 15%, 94%)',
    label: 'Bright Silver',
  },
  {
    color: 'hsl(184, 9%, 62%)',
    label: 'Light Grayish Cyan',
  },
  {
    color: 'hsl(0, 0%, 87%)',
    label: 'Light Gray',
  },
  {
    color: 'hsl(0, 0%, 100%)',
    label: 'White',
  },
  {
    color: 'hsl(24, 100%, 41%)',
    label: 'Pumpkin',
  },
  {
    color: 'hsl(6, 63%, 46%)',
    label: 'Strong Red',
  },
  {
    color: 'hsl(204, 8%, 76%)',
    label: 'Silver',
  },
  {
    color: 'hsl(184, 6%, 53%)',
    label: 'Grayish Cyan',
  },
  {
    color: 'hsl(0, 0%, 60%)',
    label: 'Dark Gray',
  },
  {
    color: 'hsl(0, 0%, 0%)',
    label: 'Black',
  },
];

// class Preview extends Plugin {
//   init() {
//     const editor = this.editor;

//     // The button must be registered among the UI components of the editor
//     // to be displayed in the toolbar.
//     editor.ui.componentFactory.add('preview', () => {
//       // The button will be an instance of ButtonView.
//       const button = new ButtonView();

//       button.set({
//         label: 'Preview',
//         withText: true,
//       });

//       // Execute a callback function when the button is clicked.
//       // button.on('execute', () => setShowPreview(!showPreview));
//       return button;
//     });
//   }
// }

const editorConfiguration = {
  plugins: [
    Alignment,
    Essentials,
    Bold,
    Code,
    Italic,
    Paragraph,
    Link,
    //List,
    Underline,
    Heading,
    //CodeBlock,
    BlockQuote,
    Highlight,
    HorizontalLine,
    Font,
    //Preview,
  ],
  toolbar: [
    'heading',
    '|',
    'bold',
    'italic',
    'underline',
    '|',
    'numberedList',
    'bulletedList',
    '|',
    'alignment:left',
    'alignment:right',
    'alignment:center',
    'alignment:justify',
    '|',
    'fontSize',
    'fontFamily',
    '|',
    'fontColor',
    'fontBackgroundColor',
    '|',
    'link',
    'horizontalLine',
  ],
  heading: {
    options: [
      {
        model: 'paragraph',
        view: 'p',
        title: 'Normal',
        class: 'ck-heading_paragraph',
      },
      {
        model: 'heading1',
        view: 'h1',
        title: 'Heading 1',
        class: 'ck-heading_heading1',
      },
      {
        model: 'heading2',
        view: 'h2',
        title: 'Heading 2',
        class: 'ck-heading_heading2',
      },
      {
        model: 'heading3',
        view: 'h3',
        title: 'Heading 3',
        class: 'ck-heading_heading3',
      },
      {
        model: 'heading4',
        view: 'h4',
        title: 'Heading 4',
        class: 'ck-heading_heading4',
      },
      {
        model: 'heading5',
        view: 'h5',
        title: 'Heading 5',
        class: 'ck-heading_heading5',
      },
      {
        model: 'heading6',
        view: 'h6',
        title: 'Heading 6',
        class: 'ck-heading_heading6',
      },
      {
        model: 'format',
        view: 'pre',
        title: 'Formatted',
        class: 'ck-format',
      },
      {
        model: 'address',
        view: 'address',
        title: 'Address',
        class: 'ck-address',
      },
      { model: 'div', view: 'div', title: 'Normal (DIV)', class: 'ck-div' },
    ],
    fontSize: {
      options: [
        8,
        9,
        10,
        11,
        12,
        13,
        'default',
        16,
        18,
        20,
        22,
        24,
        26,
        28,
        36,
        48,
        72,
      ],
    },
    fontColor: {
      colors: colors,
      columns: 6,
    },
    fontBackgroundColor: {
      colors: colors,
      columns: 6,
    },
    link: {
      defaultProtocol: 'https://',
    },
  },
};

const Editor = ({ onChange, data }) => {
  const [showPreview, setShowPreview] = useState(true);

  return (
    <Row gutter={16} justify="center" className="pl-2">
      <Col span={showPreview ? 11 : 24}>
        <CKEditor
          key={'rajesh'}
          editor={ClassicEditor}
          config={editorConfiguration}
          data={data}
          onError={(err) => {
            console.log('err', err);
          }}
          on
          onReady={(editor) => {
            // debugger;
            // const fontFamily = editor.commands.get('fontFamily');
            // fontFamily.execute({ value: 'Arial, Helvetica, sans-serif' });
            // editor.editing.view.change((writer) => {
            //   writer.setStyle(
            //     'height',
            //     '300px',
            //     editor.editing.view.document.getRoot()
            //   );
            // });
            // editor.editing.view.document.on(
            //   'enter',
            //   (evt, data) => {
            //     if (data.isSoft) {
            //       editor.execute('shiftEnter');
            //     } else {
            //       editor.execute('shiftEnter');
            //     }
            //     data.preventDefault();
            //     evt.stop();
            //     editor.editing.view.scrollToTheSelection();
            //   },
            //   { priority: 'high' }
            // );
          }}
          onChange={(_, editor) => {
            onChange(editor.getData());
          }}
        />
      </Col>
      {showPreview && (
        <Col span={11} className="editor-preview">
          <Card
            style={{ height: '337px', overflowY: 'auto' }}
            title={
              <>
                <i className="fa-solid fa-eye"></i>&nbsp;Preview
              </>
            }
          >
            <div
              dangerouslySetInnerHTML={{
                __html: data,
              }}
            ></div>
          </Card>
        </Col>
      )}
    </Row>
  );
};

export default Editor;
