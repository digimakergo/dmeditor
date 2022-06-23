import {blockManager} from './BlockManager';
import { FullImageHandler } from './blocks/FullImage';
import { HeadingHandler } from './blocks/Heading';
import { TextMediaHandler } from './blocks/TextMedia';

import { ParagraphHandler } from './blocks/Paragraph';
import { TableHandler } from './blocks/Table';
import { ContentBlockHandler } from './blocks/ContentBlock';


blockManager.registerBlockType(ParagraphHandler);
blockManager.registerBlockType(HeadingHandler);
blockManager.registerBlockType(TableHandler);
blockManager.registerBlockType(FullImageHandler);
blockManager.registerBlockType(HeadingHandler);
blockManager.registerBlockType(TextMediaHandler);
blockManager.registerBlockType(ContentBlockHandler);