---
title: working-on
date: '2021-08-02'
tags: ['draft']
---

cue notes
	- fix for [#786 (Notes Syntax Highlighting Causing Crash on Lessons)](https://github.com/eggheadio/egghead-next/issues/786)
		- [Check if value exists when applying syntax highlighting](https://github.com/eggheadio/egghead-next/pull/788)
		- [Syntax fixes for note causing issues](https://github.com/eggheadio/eggheadio-course-notes/pull/199)
			- **gotchas**
				- language attribute is always lowercase 
					- 🛑 JS 
					- ✅ js
				- use `jsx` or `tsx` for React code
				- first line after opening a code block cannot be empty, otherwise the rest gets ignored, resulting in empty code block
				- empty line both _before closing_ and _after opening_ `TimeStamp` is necessary in MDX@1
			- how to preview notes: https://share.getcloudapp.com/mXuK8o1O