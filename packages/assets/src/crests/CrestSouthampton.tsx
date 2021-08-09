import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => <svg width="auto" height="1em" viewBox="0 0 355.508 405.592" xmlns="http://www.w3.org/2000/svg" {...props}><path fill="#211E1F" d="M305.354 289.95c-30.246 35.949-75.561 58.813-126.242 58.813-50.182 0-95.056-22.383-125.327-57.729L17.95 334.129c40.247 43.217 97.668 70.285 161.394 70.285 64.105 0 121.783-27.359 162.029-71.04l-36.019-43.424" /><path fill="none" stroke="#FFF" strokeWidth={2.356} d="M305.354 289.95c-30.246 35.949-75.561 58.813-126.242 58.813-50.182 0-95.056-22.383-125.327-57.729L17.95 334.129c40.247 43.217 97.668 70.285 161.394 70.285 64.105 0 121.783-27.359 162.029-71.04l-36.019-43.424z" /><path fill="#211E1F" d="M276.995 124.88v191.384c0 5.528-3.502 10.322-8.416 12.16l-88.865 34.457-88.896-34.457c-4.886-1.838-8.416-6.632-8.416-12.16l.013-191.384h194.58" /><path fill="none" stroke="#FFF" strokeWidth={2.356} d="M276.995 124.88v191.384c0 5.528-3.502 10.322-8.416 12.16l-88.865 34.457-88.896-34.457c-4.886-1.838-8.416-6.632-8.416-12.16l.013-191.384h194.58z" /><path fill="#FFF" d="M87.027 272.62V154.673h185.296l.035 117.947H87.027" /><path fill="#ED1A3B" d="M272.358 261.558c-1.633 2.609-5.634 4.445-10.271 4.445-4.705 0-8.728-1.836-10.322-4.48-1.633 2.646-5.635 4.48-10.322 4.48-4.689 0-8.641-1.836-10.291-4.445-1.648 2.609-5.632 4.445-10.288 4.445-4.706 0-8.673-1.836-10.306-4.48h-.051c-1.614 2.646-5.602 4.48-10.272 4.48-4.688 0-8.657-1.836-10.271-4.445-1.65 2.609-5.688 4.445-10.318 4.445-4.699 0-8.675-1.836-10.311-4.48h.038c-1.658 2.646-5.634 4.48-10.293 4.48-4.694 0-8.695-1.836-10.33-4.445-1.628 2.609-5.647 4.445-10.311 4.445-4.652 0-8.653-1.836-10.281-4.48h-.042c-1.606 2.646-5.616 4.48-10.253 4.48-4.71 0-8.681-1.836-10.333-4.445v.066c-1.636 2.627-5.622 4.379-10.246 4.379-4.732 0-8.708-1.836-10.313-4.48v-.225l.057 52.132c0 5.289 3.343 9.791 8.022 11.541l84.665 32.878 84.605-32.878c4.689-1.75 8.039-6.252 8.039-11.541v-52.099.227" /><path fill="#00AEEF" d="M272.358 256.114c-1.633 2.592-5.634 4.447-10.271 4.447-4.705 0-8.728-1.873-10.322-4.447-1.633 2.574-5.635 4.447-10.322 4.447-4.689 0-8.641-1.855-10.291-4.447-1.648 2.592-5.632 4.447-10.288 4.447-4.706 0-8.673-1.873-10.306-4.447h-.051c-1.614 2.574-5.602 4.447-10.272 4.447-4.688 0-8.657-1.855-10.271-4.447-1.65 2.592-5.688 4.447-10.318 4.447-4.699 0-8.675-1.873-10.311-4.447h.038c-1.658 2.574-5.634 4.447-10.293 4.447-4.694 0-8.695-1.855-10.33-4.447-1.628 2.592-5.647 4.447-10.311 4.447-4.652 0-8.653-1.873-10.281-4.447h-.042c-1.606 2.574-5.616 4.447-10.253 4.447-4.71 0-8.681-1.855-10.333-4.447v.084c-1.636 2.609-5.622 4.363-10.246 4.363-4.732 0-8.708-1.873-10.313-4.447v-6.459c1.605 2.608 5.581 4.481 10.313 4.481 4.624 0 8.61-1.839 10.246-4.45 1.652 2.611 5.623 4.45 10.333 4.45 4.637 0 8.647-1.873 10.253-4.481h.042c1.628 2.608 5.629 4.481 10.281 4.481 4.664 0 8.683-1.839 10.311-4.45 1.635 2.611 5.636 4.45 10.33 4.45 4.659 0 8.635-1.873 10.293-4.481h-.038c1.636 2.608 5.612 4.481 10.311 4.481 4.632 0 8.668-1.839 10.318-4.45 1.613 2.611 5.582 4.45 10.271 4.45 4.673 0 8.658-1.873 10.272-4.481h.051c1.633 2.608 5.6 4.481 10.306 4.481 4.656 0 8.64-1.839 10.288-4.45 1.65 2.611 5.602 4.45 10.291 4.45 4.688 0 8.689-1.873 10.322-4.481 1.596 2.608 5.617 4.481 10.322 4.481 4.638 0 8.639-1.839 10.271-4.45v6.428M272.358 244.483c-1.633 2.594-5.634 4.416-10.271 4.416-4.705 0-8.728-1.84-10.322-4.416-1.633 2.576-5.635 4.416-10.322 4.416-4.689 0-8.641-1.822-10.291-4.416-1.648 2.594-5.632 4.416-10.288 4.416-4.706 0-8.673-1.84-10.306-4.416h-.051c-1.614 2.576-5.602 4.416-10.272 4.416-4.688 0-8.657-1.822-10.271-4.416-1.65 2.594-5.688 4.416-10.318 4.416-4.699 0-8.675-1.84-10.311-4.416h.038c-1.658 2.576-5.634 4.416-10.293 4.416-4.694 0-8.695-1.822-10.33-4.416-1.628 2.594-5.647 4.416-10.311 4.416-4.652 0-8.653-1.84-10.281-4.416h-.042c-1.606 2.576-5.616 4.416-10.253 4.416-4.71 0-8.681-1.822-10.333-4.416v.066c-1.636 2.613-5.622 4.35-10.246 4.35-4.732 0-8.708-1.84-10.313-4.416v-6.457c1.605 2.594 5.581 4.467 10.313 4.467 4.624 0 8.61-1.823 10.246-4.452 1.652 2.629 5.623 4.452 10.333 4.452 4.637 0 8.647-1.873 10.253-4.467h.042c1.628 2.594 5.629 4.467 10.281 4.467 4.664 0 8.683-1.823 10.311-4.452 1.635 2.629 5.636 4.452 10.33 4.452 4.659 0 8.635-1.873 10.293-4.467h-.038c1.636 2.594 5.612 4.467 10.311 4.467 4.632 0 8.668-1.823 10.318-4.452 1.613 2.629 5.582 4.452 10.271 4.452 4.673 0 8.658-1.873 10.272-4.467h.051c1.633 2.594 5.6 4.467 10.306 4.467 4.656 0 8.64-1.823 10.288-4.452 1.65 2.629 5.602 4.452 10.291 4.452 4.688 0 8.689-1.873 10.322-4.467 1.596 2.594 5.617 4.467 10.322 4.467 4.638 0 8.639-1.823 10.271-4.452v6.442" /><path fill="#211E1F" d="M193.279 320.937s9.087 14.203 4.312 10.203c-3.487-3.007-8.262-9.931-11.715-15.632l-18.648 7.248s-10.702 13.021-8.331 7.267c1.709-4.158 6.989-10.906 11.345-16.011L157.47 298.59s-15.707-6.114-9.48-5.651c4.074.309 12.574 3.366 18.699 5.842l10.635-16.938s1-16.85 2.485-10.787c1.028 4.157.703 13.157.207 19.819l19.5 4.743s16.315-4.277 10.993-.996c-3.729 2.335-11.871 4.775-18.362 6.338l1.132 19.977" /><path fill="none" stroke="#211E1F" strokeWidth={1.441} d="M193.279 320.937s9.087 14.203 4.312 10.203c-3.487-3.007-8.262-9.931-11.715-15.632l-18.648 7.248s-10.702 13.021-8.331 7.267c1.709-4.158 6.989-10.906 11.345-16.011L157.47 298.59s-15.707-6.114-9.48-5.651c4.074.309 12.574 3.366 18.699 5.842l10.635-16.938s1-16.85 2.485-10.787c1.028 4.157.703 13.157.207 19.819l19.5 4.743s16.315-4.277 10.993-.996c-3.729 2.335-11.871 4.775-18.362 6.338l1.132 19.977z" /><path fill="#FFF" d="M178.42 317.175c.115.273.322.463.556.463.219 0 .387-.188.532-.463.205-.481.395-1.612.324-3.968 0 0 .119-7.954 6.062.585 16.642 23.994-7.062 24.131-7.062 24.131h.228s-23.707-.137-7.042-24.131c5.943-8.539 6.013-.585 6.013-.585-.018 2.354.127 3.485.391 4.003v-.035" /><path fill="none" stroke="#211E1F" strokeWidth={1.441} d="M178.42 317.175l.556.463.532-.463c.205-.481.324-1.612.324-3.968 0 0 .119-7.954 6.062.585 16.642 23.994-7.062 24.131-7.062 24.131h.228s-23.707-.137-7.042-24.131c5.943-8.539 6.013-.585 6.013-.585 0 2.354.127 3.485.391 4.003v-.035h-.002z" /><path fill="#FFF" d="M166.229 307.558c-.217.202-.317.428-.22.616.053.224.264.396.571.396h-.015c.554.035 1.643-.071 3.89-.857 0 0 7.612-2.336 1.33 5.892-17.7 23.256-25.103.807-25.103.807v.154s-7.145-22.588 20.806-14.154c9.983 2.973 2.4 5.566 2.4 5.566-2.292.666-3.272 1.183-3.659 1.58" /><path fill="none" stroke="#211E1F" strokeWidth={1.441} d="M166.229 307.558c-.217.202-.22.616-.22.616l.571.396h-.015s1.643-.071 3.89-.857c0 0 7.612-2.336 1.33 5.892-17.7 23.256-25.103.807-25.103.807v.154s-7.145-22.588 20.806-14.154c9.983 2.973 2.4 5.566 2.4 5.566-2.292.666-3.272 1.183-3.659 1.58z" /><path fill="#FFF" d="M171.552 292.92c-.237-.152-.504-.152-.683 0-.19.119-.242.362-.19.639v-.02c.115.569.576 1.599 2.079 3.452 0 0 4.552 6.494-5.269 3.074-27.554-9.617-8.487-23.636-8.487-23.636l-.141.069s19.207-13.793 19.884 15.426c.231 10.408-4.571 3.983-4.571 3.983-1.323-1.922-2.138-2.711-2.622-2.987" /><path fill="none" stroke="#211E1F" strokeWidth={1.441} d="M171.552 292.92h-.683l-.19.639v-.02s.576 1.599 2.079 3.452c0 0 4.552 6.494-5.269 3.074-27.554-9.617-8.487-23.636-8.487-23.636l-.141.069s19.207-13.793 19.884 15.426c.231 10.408-4.571 3.983-4.571 3.983-1.323-1.922-2.138-2.711-2.622-2.987z" /><path fill="#FFF" d="M187.182 293.506c.05-.259 0-.531-.172-.67-.172-.088-.446-.068-.706.084-.464.227-1.288.981-2.646 2.975 0 0-4.762 6.37-4.547-4.002.672-29.201 19.887-15.408 19.887-15.408l-.138-.104s19.083 14.018-8.538 23.655c-9.777 3.416-5.186-3.077-5.186-3.077 1.445-1.89 1.959-2.886 2.046-3.453" /><path fill="none" stroke="#211E1F" strokeWidth={1.441} d="M187.182 293.506l-.172-.67-.706.084c-.464.227-1.288.981-2.646 2.975 0 0-4.762 6.37-4.547-4.002.672-29.201 19.887-15.408 19.887-15.408l-.138-.104s19.083 14.018-8.538 23.655c-9.777 3.416-5.186-3.077-5.186-3.077 1.445-1.89 2.046-3.453 2.046-3.453z" /><path fill="#FFF" d="M191.439 308.569c.274-.019.517-.172.567-.396.104-.188-.033-.414-.24-.616-.412-.396-1.393-.945-3.676-1.582 0 0-7.545-2.595 2.387-5.566 28.018-8.434 20.835 14.154 20.835 14.154l.035-.154s-7.437 22.449-25.11-.807c-6.335-8.229 1.286-5.892 1.286-5.892 2.251.788 3.386.894 3.916.859" /><path fill="none" stroke="#211E1F" strokeWidth={1.441} d="M191.439 308.569l.567-.396s-.033-.414-.24-.616c-.412-.396-1.393-.945-3.676-1.582 0 0-7.545-2.595 2.387-5.566 28.018-8.434 20.835 14.154 20.835 14.154l.035-.154s-7.437 22.449-25.11-.807c-6.335-8.229 1.286-5.892 1.286-5.892 2.251.788 3.916.859 3.916.859z" /><path fill="#211E1F" d="M162.713 281.653s-1.779 1.235-3.325 1.733c-1.541.446-2.206 1.614-2.401 1.892 0 0-.88 2.026-1.443 1.201-.601-.811.598-2.336.598-2.336a4.524 4.524 0 012.383-1.957c1.539-.445 3.316-1.664 3.316-1.664 0-.004 1.742-1.359 2.667-2.649.948-1.319 2.224-1.612 2.583-1.666 0 0 1.805-.651 2.436.14.586.843-1.589.996-1.589.996-.368.138-1.665.411-2.594 1.685-.9 1.304-2.631 2.625-2.631 2.625M195.116 281.635s-1.699-1.319-2.595-2.645c-.944-1.287-2.249-1.58-2.558-1.702 0 0-2.217-.153-1.633-.978.617-.807 2.439-.139 2.439-.139a3.893 3.893 0 012.559 1.666c.944 1.287 2.662 2.684 2.662 2.684 0-.004 1.821 1.184 3.332 1.646a4.331 4.331 0 012.354 1.909s1.203 1.563.637 2.386c-.583.825-1.426-1.203-1.426-1.203-.225-.308-.893-1.441-2.438-1.902-1.495-.503-3.333-1.722-3.333-1.722M205.198 312.468s.758-2.026 1.682-3.33c1.017-1.235.826-2.612.81-2.938 0 0-.479-2.146.466-1.82.942.326.91 2.234.91 2.234 0 .358.154 1.699-.79 2.986-.998 1.272-1.735 3.331-1.735 3.331s-.567 2.099-.533 3.66c0 1.613-.909 2.595-1.1 2.902 0 0-1.135 1.598-2.06 1.307-.997-.311.702-1.754.702-1.754.189-.291 1.101-1.319 1.048-2.865-.001-1.6.6-3.713.6-3.713M178.976 331.483s2.188.084 3.685.602c1.516.497 2.717-.035 3.062-.156 0 0 1.854-1.149 1.837-.118 0 .942-1.837 1.563-1.837 1.563-.345.104-1.546.668-3.062.138-1.496-.516-3.685-.618-3.685-.618s-2.224.104-3.712.618c-1.511.53-2.7-.034-3.079-.138 0 0-1.867-.62-1.867-1.563-.008-1.031 1.867.118 1.867.118.379.121 1.568.653 3.079.156 1.488-.518 3.712-.602 3.712-.602M152.794 312.468s.614 2.113.586 3.713c0 1.611.865 2.574 1.099 2.865 0 0 1.663 1.443.714 1.754-.948.291-2.087-1.307-2.087-1.307-.222-.309-1.089-1.289-1.089-2.902.007-1.563-.559-3.66-.559-3.66s-.748-2.059-1.727-3.331c-.93-1.287-.798-2.628-.798-2.986 0 0 0-1.908.93-2.234.917-.326.421 1.82.421 1.82-.033.326-.157 1.703.83 2.938.949 1.302 1.68 3.33 1.68 3.33" /><path fill="#FFC40D" d="M178.834 298.555c-2.921 0-5.313 2.404-5.313 5.343a5.301 5.301 0 005.313 5.342c2.982 0 5.375-2.336 5.375-5.342 0-2.938-2.392-5.343-5.375-5.343" /><path fill="none" stroke="#FFC40D" strokeWidth={0.571} d="M178.834 298.555c-2.921 0-5.313 2.404-5.313 5.343a5.301 5.301 0 005.313 5.342c2.982 0 5.375-2.336 5.375-5.342 0-2.938-2.392-5.343-5.375-5.343z" /><path fill="#211E1F" d="M188.95 201.736l.705 14.423 12.194-7.919 3.829 6.255-14.377 8.311v3.009s16.729 9.394-3.659 9.032l.003.105c-7.135 5.959-13.893.066-13.893.066-20.387.359-3.679-9-3.679-9v-3.023l-12.714-9.877 3.014-6.529 11.37 9.727.661-14.4 16.546-.18" /><path fill="#22B24C" d="M204.133 214.099c11.818 13.52 20.49-.714 20.49-.714 14.928-3.625 6.066-14.191 6.066-14.191 15.561-10.203-2.715-18.208-2.715-18.208-.12-13.558-11.664-12.547-11.664-12.547-12.059-10.537-23.583 1.16-23.583 1.16-18.073-15.045-31.794 2.315-31.794 2.315s-11.548-8.005-16.733 4.539c0 0-18.387-.511-11.522 18.051 0 0-14.209 14.223 4.338 21.228 0 0 9.861 18.258 23.416.875 0 0 8.331.498 7.02-11.243 0 0 10.559 4.396 20.551-.479 0-.003 3.195 7.187 10.065 3.163 0 0-1.063 4.624 5.581 5.57l.484.481" /><path fill="none" stroke="#211E1F" strokeWidth={5.901} d="M204.133 214.099c11.818 13.52 20.49-.714 20.49-.714 14.928-3.625 6.066-14.191 6.066-14.191 15.561-10.203-2.715-18.208-2.715-18.208 0-13.558-11.664-12.547-11.664-12.547-12.059-10.537-23.583 1.16-23.583 1.16-18.073-15.045-31.794 2.315-31.794 2.315s-11.548-8.005-16.733 4.539c0 0-18.387-.511-11.522 18.051 0 0-14.209 14.223 4.338 21.228 0 0 9.861 18.258 23.416.875 0 0 8.331.498 7.02-11.243 0 0 10.559 4.396 20.551-.479 0 0 3.195 7.187 10.065 3.163 0 0-1.063 4.624 5.581 5.57l.484.481z" /><path fill="#FFC20E" d="M45.987 330.521l.88.737c-3.029 5.498-3.458 9.379-1.346 11.185 1.52 1.338 3.53.787 5.369-1.289.786-.894 1.304-1.924 1.304-2.715 0-1.149-.854-2.438-1.802-4.379-1.822-3.711-1.745-6.699 1.493-10.443 3.246-3.709 7.486-4.945 10.179-2.627 1.166 1.047 1.777 2.508 1.889 4.396l2.094-.636.731.636-6.467 7.864-.772-.755c2.532-5.236 3.073-8.381 1.166-9.997-1.451-1.306-3.348-.855-5.028 1.083-2.117 2.424-.898 3.832.708 6.835.842 1.668 1.508 2.957 1.164 4.934-.317 1.77-1.378 3.813-3.079 5.805-3.525 4.002-7.553 5.223-10.4 2.748-1.409-1.271-2.062-2.767-1.975-5.049l-2.555.855-.742-.65 7.189-8.538M70.248 333.218c2.947-1.391 5.393-1.34 7.583.155 2.207 1.546 3.132 3.763 2.813 7.161-.255 2.99-1.653 6.391-3.997 9.773-2.353 3.366-4.639 5.549-7.551 6.903-3.111 1.461-5.788 1.479-7.852 0-2.135-1.457-3.029-3.762-2.727-7.246.274-3.3 1.502-6.219 3.88-9.604 2.372-3.414 5.101-5.873 7.851-7.142m-7.833 22.26c2.294 1.58 5.716-1.029 10.461-7.832 4.758-6.854 6.019-10.906 3.724-12.539-2.274-1.562-5.657 1.03-10.423 7.867-4.749 6.817-6.069 10.908-3.762 12.504zM94.098 346.495l-1.017-.551c-.898-.463-1.259-.103-1.979 1.254l-6.597 12.332c-2.376 4.434-2.483 7.061.078 8.402 1.154.581 2.36.53 3.425 0 1.685-.945 2.809-2.869 4.45-5.929l4.773-8.897c1.364-2.593 1.641-4.07-.097-4.98-.017-.033-.107-.053-.125-.065l.928-1.787 5.599 3.006-.948 1.733c-1.749-.616-2.667.275-4.028 2.816l-4.918 9.172c-1.416 2.68-2.523 4.672-4.166 6.08-2.448 2.063-4.846 2.335-7.454.876-4.006-2.112-4.517-5.959-1.683-11.386l7.128-13.295c.722-1.375.773-1.894-.085-2.354l-1.014-.551.92-1.77 7.745 4.123-.935 1.771M115.619 356.096c-.787-.293-1.184.033-1.743 1.408l-7.326 18.533c-.583 1.408-.583 1.926.326 2.303l1.1.445-.756 1.873-8.134-3.229.748-1.907 1.074.446c.923.361 1.219 0 1.813-1.459l7.376-18.5c.528-1.391.528-1.871-.232-2.182-1.675-.706-4.19 1.631-6.621 6.615l-1.117-.396 4.201-9.586 14.11 5.601-3.525 9.825-1.035-.379c1.629-5.305 1.42-8.759-.259-9.411M127.753 384.954c.938.291 1.217-.137 1.611-1.615l2.358-8.744-5.893-1.58-2.321 8.71c-.414 1.477-.369 1.959.578 2.231l1.135.326-.552 1.943-8.448-2.271.524-1.958 1.131.259c.956.291 1.224-.104 1.621-1.598l5.11-18.961c.434-1.496.407-2.027-.573-2.305l-1.124-.291.546-1.925 8.443 2.304-.528 1.924-1.11-.312c-.95-.274-1.231.173-1.67 1.668l-2.092 7.882 5.901 1.582 2.099-7.886c.427-1.459.387-2.024-.571-2.285l-1.106-.291.498-1.938 8.463 2.336-.493 1.904-1.16-.31c-.944-.259-1.216.189-1.637 1.683l-5.101 18.965c-.411 1.494-.369 1.977.596 2.215l1.102.344-.501 1.926-8.523-2.27.57-1.975 1.117.313M150.127 389.469l1.159.069c.499.034.686-.224.776-.792a7.06 7.06 0 000-1.078l-.395-4.434-5.837-.842-.831 1.939c-.261.62-.474 1.373-.523 1.893-.275 1.717.351 2.368 2.026 2.729l-.279 1.96-6.479-.944.297-1.977c1.463-.17 2.425-1.736 3.669-4.654l8.414-19.994 1.695.259 2.722 25.166c.12 1.2.432 1.664 1.271 1.817l-.291 2.01-7.656-1.135.262-1.992m-3.334-9.376l4.665.722-.919-9.586-3.746 8.864zM167.16 386.344c-.123 3.556.329 4.88 2.485 4.98l-.048 2.045-6.621-.189v-2.045c2.069-.084 2.481-1.391 2.575-4.86l.417-16.644c.045-1.479-.107-2.061-1.099-2.132l-1.215-.015.085-2.012 7.433.206 3.222 16.646 3.764-16.491 7.324.173-.069 2.027-1.151-.084c-.966 0-1.173.479-1.198 2.007l-.462 19.668c-.052 1.546.11 2.026 1.095 2.026l1.184.017-.065 2.028-8.588-.189.066-2.01h1.002c.971.035 1.189-.445 1.244-1.958l.523-20.75-5.651 24.667-1.124-.02-4.714-24.783-.414 17.692M198.397 390.587l1.458-.121.19 1.994-9.07.91-.204-2.045 1.235-.102c.996-.123 1.101-.568.979-2.115l-1.905-19.529c-.105-1.527-.346-2.008-1.324-1.941l-1.219.142-.226-2.012 10.084-.962c4.19-.413 6.578 2.095 7.077 7.216.548 5.461-1.735 8.19-6.855 8.688-.686.104-1.439.121-2.318.172l.791 7.853c.155 1.578.38 1.92 1.307 1.852m-2.251-11.868c.26.066.619.066 1.135 0 3.109-.274 4.243-1.666 3.798-6.237-.414-4.447-1.599-5.769-4.313-5.529-1.478.154-1.7.447-1.546 2.578l.926 9.188zM218.854 363.291c-.825.138-.909.62-.602 2.081l4.002 19.564c.326 1.496.586 1.889 1.563 1.682l1.116-.207.396 1.996-8.537 1.752-.43-1.959 1.135-.258c.978-.189 1.029-.705.756-2.199l-4.055-19.512c-.309-1.443-.582-1.892-1.391-1.718-1.788.378-2.596 3.728-1.907 9.224l-1.116.205-1.752-10.254 14.84-3.107 2.508 10.167-1.114.224c-1.562-5.292-3.607-8.09-5.412-7.681M229.674 362.315c.688-3.146 2.199-5.121 4.742-5.91 2.559-.857 4.912-.223 7.42 2.043 2.232 2.027 4.07 5.188 5.359 9.07 1.307 3.916 1.598 7.075.979 10.221-.704 3.365-2.317 5.479-4.775 6.27-2.473.81-4.791.119-7.386-2.217-2.455-2.182-4.054-4.912-5.322-8.861-1.29-3.952-1.633-7.612-1.017-10.616m13.089 19.683c2.631-.841 2.631-5.151.053-13.036-2.578-7.918-5.051-11.403-7.763-10.526-2.594.855-2.594 5.133-.035 13.053 2.609 7.898 5.1 11.403 7.745 10.509zM256.676 376.552c1.771-1.147 1.546-2.455.119-5.493l-7.006-15.136-.723-.512c-.738-.551-1.271-.91-2.113-.5l-.24.119-.873-1.787 5.289-2.455 15.233 11.957-4.378-9.396c-1.564-3.384-2.475-4.242-4.554-3.281l-.823-1.854 6.098-2.834.857 1.818c-1.717.963-1.58 2.216-.084 5.463l8.949 19.201-1.324.619-18.841-14.855 5.891 12.814c1.476 3.211 2.509 4.153 4.499 3.33l.893 1.805-6.01 2.798-.859-1.821M291.424 338.919l-.928.654c-4.054-4.381-6.509-5.152-9.414-3.162-1.115.756-1.319 1.068-.221 2.697l4.602 6.752c.123-.053.226-.103.31-.172 1.7-1.17 1.53-2.902-.326-6.271l.929-.653 7.199 10.514-.964.67c-2.457-3.006-3.985-3.693-5.668-2.578-.088.07-.188.154-.241.189l5.188 7.645c.878 1.271 1.236 1.544 2.078.996l1.356-.943 1.134 1.683-7.607 5.223-1.135-1.686.945-.668c.857-.533.702-1.05-.138-2.304l-11.097-16.231c-.859-1.287-1.289-1.58-2.096-1.013l-.994.65-1.117-1.629 12.416-8.504 5.789 8.141M313.735 344.571c-1.511 1.289-3.436 1.701-5.684 1.271-3.418-.688-6.975-3.075-10.221-6.889-2.539-2.953-4.175-6.063-4.845-9.051-.772-3.369-.069-5.789 1.978-7.56 1.27-1.1 2.748-1.477 4.672-1.136l-.344-2.336.737-.632 7.541 8.244-.81.91c-4.895-4.175-8.362-5.412-10.305-3.779-2.317 2.009-.772 5.771 4.725 12.16 5.515 6.477 8.88 8.521 11.472 6.322 1.942-1.701 1.531-4.98-1.354-9.705l1.408-.273c3.695 5.53 4.02 9.911 1.03 12.454" /><path fill="#FFF" d="M17.951 111.451l4.387 9.074-12.327 3.366 3.846 7.67 12.36-3.375 3.859 7.678-12.37 3.35 3.812 7.635 12.394-3.342 3.895 7.679-12.458 3.315 3.874 7.631 12.427-3.285 5.53 10.632a59.272 59.272 0 006.845-2.378l-28.907-57.688c-2.097.884-4.475 1.58-7.167 2.038M51.869 114.642c-.858-4.088 8.443-8.97 15.912-14.985l-9.887-19.788c-3.904 2.139-8.249 5.479-12.577 10.354-1.159 1.195-2.181 2.452-3.166 3.701l9.718 20.718" /><path fill="#ED1A3B" d="M74.029 79.457c-2.398-3.265-8.566-3.701-16.136.412l9.886 19.788c6.857-5.601 12.143-12.212 6.25-20.2M25.117 109.412L54.024 167.1c8.099-3.358 14.78-8.107 17.033-11.617l-12.444-26.472-6.175-13.146a2.816 2.816 0 01-.57-1.224L42.15 93.924c-4.863 6.05-9.071 12.083-17.033 15.488M17.951 111.451c-3.894.666-8.427.843-13.968.386l6.028 12.055 12.327-3.366-4.387-9.075M26.216 128.186l-12.36 3.375 3.85 7.653 12.37-3.35-3.86-7.678M33.912 143.507l-12.395 3.341 3.832 7.653 12.457-3.316-3.894-7.678M29.223 162.132l4.512 9.102c4.355.237 8.962-.484 13.444-1.755l-5.529-10.632-12.427 3.285" /><path fill="#FFF" d="M67.603 99.81l5.487 10.956c3.904-3.281 8.065-7.186 12.505-10.905L75.313 81.499c3.703 7.137-1.346 13.145-7.71 18.311" /><path fill="#ED1A3B" d="M52.438 115.866c.279.421.698.783 1.259 1.159 5.532 3.904 12.023-.077 19.392-6.259L67.603 99.81c-8.166 6.583-18.529 11.749-15.165 16.056" /><path fill="none" stroke="#211E1F" strokeWidth={4.704} d="M52.438 115.866c-6.207-7.982 34.504-18.874 21.591-36.409-3.639-4.978-15.927-3.465-28.713 10.766-9.901 10.919-14.267 23.9-41.335 21.614l29.753 59.396c15.005.788 33.34-9.485 37.324-15.783l-18.62-39.584z" /><path fill="none" stroke="#211E1F" strokeWidth={4.704} d="M85.595 99.861c-12.736 10.702-23.428 23.119-31.897 17.164-.561-.376-.98-.738-1.259-1.159-5.955-7.668 31.361-18.031 22.875-34.367l10.281 18.362z" /><path fill="#FFF" d="M337.561 111.451l-4.396 9.074 12.281 3.366-3.814 7.67-12.366-3.375-3.847 7.678 12.367 3.35-3.814 7.635-12.385-3.342-3.881 7.679 12.42 3.315-3.851 7.631-12.435-3.285-5.531 10.632c-2.318-.661-4.637-1.451-6.835-2.378l28.905-57.688c2.114.884 4.434 1.58 7.182 2.038M303.62 114.642c.842-4.088-8.451-8.97-15.904-14.985l9.895-19.788c3.881 2.139 8.209 5.479 12.624 10.354 1.082 1.195 2.11 2.452 3.126 3.701l-9.741 20.718" /><path fill="#ED1A3B" d="M281.428 79.457c2.423-3.265 8.588-3.701 16.182.412l-9.895 19.788c-6.87-5.601-12.164-12.212-6.287-20.2M330.379 109.412L301.474 167.1c-8.075-3.358-14.772-8.107-17.039-11.617l18.619-39.617c.325-.416.479-.795.565-1.224l9.739-20.719c4.879 6.051 9.036 12.084 17.021 15.489M337.561 111.451c3.865.666 8.434.843 13.965.386l-6.08 12.055-12.281-3.366 4.396-9.075M329.264 128.186l12.367 3.375-3.847 7.653-12.367-3.35 3.847-7.678M321.586 143.507l12.384 3.341-3.846 7.653-12.42-3.316 3.882-7.678M326.274 162.132l-4.533 9.102c-4.328.237-8.965-.484-13.433-1.755l5.532-10.632 12.434 3.285" /><path fill="#FFF" d="M287.87 99.81l-5.479 10.956c-3.897-3.281-8.089-7.186-12.47-10.905l10.254-18.362c-3.71 7.137 1.355 13.145 7.695 18.311" /><path fill="#ED1A3B" d="M303.054 115.866c-.31.421-.74.783-1.255 1.159-5.565 3.904-12.006-.077-19.409-6.259l5.479-10.956c8.176 6.583 18.518 11.749 15.185 16.056" /><path fill="none" stroke="#211E1F" strokeWidth={4.704} d="M303.054 115.866c6.182-7.982-34.492-18.874-21.626-36.409 3.691-4.978 15.975-3.465 28.806 10.766 9.843 10.919 14.204 23.9 41.292 21.614l-29.785 59.396c-14.978.788-33.322-9.485-37.322-15.783l18.635-39.584z" /><path fill="none" stroke="#211E1F" strokeWidth={4.704} d="M269.92 99.861c12.728 10.702 23.394 23.119 31.879 17.164.515-.376.945-.738 1.255-1.159 5.961-7.668-31.365-18.031-22.88-34.367L269.92 99.861z" /><path fill="#FFF" d="M214.92 97.877c-2.662 2.141-7.281 5.245-12.436 8.374v41.09c5.807-3.524 11.715-7.306 17.297-10.317V94.435c-1.922 1.273-3.624 2.456-4.861 3.442M242.625 86.722c-.238 0-.48.06-.721.06l-5.875 44.393c.225-.008.48-.069.723-.069 4.81 0 9.273 1.621 13.481 3.994l13.144-40.338c-6.441-4.605-13.364-8.04-20.752-8.04M301.799 117.025c-5.496 3.852-11.938 0-19.221-6.103l-17.107 35.733c6.958 6.015 13.14 10.984 18.945 8.794l18.638-39.584c-.309.422-.741.784-1.255 1.16M53.697 117.025c-.561-.376-.98-.738-1.259-1.159l18.619 39.582c5.859 2.192 12.022-2.777 18.977-8.792l-17.136-35.733c-7.31 6.102-13.704 9.954-19.201 6.102M177.751 116.925c-1.713 0-3.999-.583-6.58-1.51v41.337c2.384.832 4.59 1.333 6.58 1.333 1.962 0 4.186-.501 6.544-1.333v-41.337c-2.539.927-4.849 1.51-6.544 1.51M112.849 86.722c-7.364 0-14.281 3.435-20.718 8.039l13.158 40.338c4.165-2.373 8.635-3.994 13.461-3.994.219 0 .469.062.696.069l-5.859-44.393c-.245.001-.477-.059-.738-.059M140.56 97.877c-1.236-.985-2.876-2.169-4.836-3.441v42.588c5.592 3.012 11.5 6.793 17.271 10.317v-41.09c-5.17-3.131-9.789-6.234-12.435-8.374" /><path fill="#ED1A3B" d="M152.995 106.251v41.09c6.471 3.947 12.798 7.571 18.177 9.411v-41.337c-5.38-1.933-12.171-5.529-18.177-9.164M113.586 86.782l5.859 44.393c4.589.222 10.208 2.575 16.278 5.849V94.435c-5.563-3.53-13.594-7.417-22.137-7.653M72.898 110.923l17.136 35.733c4.664-4.039 9.674-8.461 15.254-11.557L92.13 94.761c-6.964 4.959-13.383 11.273-19.232 16.162M184.295 115.415v41.337c5.408-1.84 11.713-5.462 18.189-9.411v-41.09c-5.976 3.635-12.762 7.231-18.189 9.164M219.782 94.435v42.588c6.063-3.273 11.663-5.627 16.248-5.849l5.875-44.393c-8.537.237-16.557 4.124-22.123 7.654M263.377 94.761l-13.144 40.338c5.532 3.096 10.548 7.518 15.236 11.557l17.108-35.733c-5.821-4.891-12.227-11.203-19.2-16.162" /><path fill="none" stroke="#211E1F" strokeWidth={4.704} d="M177.751 158.085c14.875 0 43.371-26.979 59.001-26.979 20.783 0 34.988 29.12 47.664 24.345l18.638-39.584c-.31.421-.74.783-1.255 1.159-13.965 9.852-33.854-30.303-59.174-30.303-11.799 0-22.793 7.351-27.705 11.154-7.334 5.852-28.807 19.048-37.169 19.048-8.327 0-29.875-13.196-37.191-19.048-4.903-3.804-15.907-11.154-27.711-11.154-25.265 0-45.176 40.154-59.151 30.303-.561-.376-.98-.738-1.259-1.159l18.62 39.582c12.691 4.777 26.913-24.343 47.691-24.343 15.618-.001 44.155 26.979 59.001 26.979z" /><path fill="#211E1F" d="M178.392 76.528c38.418 0 69.56-16.884 69.56-37.668 0-20.805-31.142-37.682-69.56-37.682-38.403 0-69.568 16.877-69.568 37.682 0 20.784 31.164 37.668 69.568 37.668" /><path fill="none" stroke="#FFF" strokeWidth={2.356} d="M178.392 76.528c38.418 0 69.56-16.884 69.56-37.668 0-20.805-31.142-37.682-69.56-37.682-38.403 0-69.568 16.877-69.568 37.682 0 20.784 31.164 37.668 69.568 37.668z" /><path fill="#FFC20E" d="M178.463 70.408c34.119 0 61.845-14.122 61.845-31.548 0-17.442-27.726-31.544-61.845-31.544-34.201 0-61.832 14.102-61.832 31.544.001 17.426 27.631 31.548 61.832 31.548" /><path fill="none" stroke="#211E1F" strokeWidth={0.002} d="M178.463 70.408c34.119 0 61.845-14.122 61.845-31.548 0-17.442-27.726-31.544-61.845-31.544-34.201 0-61.832 14.102-61.832 31.544.001 17.426 27.631 31.548 61.832 31.548z" /><path fill="#FFF" d="M178.519 62.854c27.778 0 50.367-9.026 50.367-20.155 0-11.1-22.589-20.115-50.367-20.115-27.808 0-50.361 9.016-50.361 20.115 0 11.129 22.552 20.155 50.361 20.155" /><path fill="none" stroke="#211E1F" strokeWidth={9.436} d="M178.519 62.854c27.778 0 50.367-9.026 50.367-20.155 0-11.1-22.589-20.115-50.367-20.115-27.808 0-50.361 9.016-50.361 20.115 0 11.129 22.552 20.155 50.361 20.155z" /><path fill="#FFF" d="M178.347 28.373c-26.785 0-48.436 21.729-48.436 48.464 0 26.786 21.651 48.466 48.436 48.466h-.596c26.727 0 48.455-21.68 48.455-48.466 0-26.735-21.729-48.464-48.455-48.464h.596" /><path fill="none" stroke="#211E1F" strokeWidth={4.704} d="M178.347 28.373c-26.785 0-48.436 21.729-48.436 48.464 0 26.786 21.651 48.466 48.436 48.466h-.596c26.727 0 48.455-21.68 48.455-48.466 0-26.735-21.729-48.464-48.455-48.464h.596z" /><path fill="#211E1F" d="M170.292 116.905l-9.971-16.931-18.259-2.982-4.586 5.806c.207.289.321.599.541.868l.79 1.134c6.115 8.634 14.927 15.18 25.275 18.375l1.865.347 4.345-6.617M157.813 70.134L165.65 94.3h24.778l7.832-24.166-20.247-14.661-20.2 14.661M178.013 45.679v-.035l15.077-9.85V30.92a48.215 48.215 0 00-15.061-2.529 48.554 48.554 0 00-15.04 2.529v4.874l15.024 9.885M150.092 62.448l.529-19.218-3.904-3.038a44.084 44.084 0 00-5.674 5.741l-.2.202c-5.513 6.745-9.198 14.994-10.452 24.054l4.319 1.899 15.382-9.64M195.805 99.974l-9.965 16.931 4.313 6.616 1.804-.338c10.494-3.22 19.512-9.957 25.644-18.787l.379-.588c.239-.345.431-.722.653-1.011l-4.621-5.806-18.207 2.983M206.022 62.448l15.339 9.641 4.328-1.899c-1.254-9.095-4.964-17.386-10.526-24.159l-.035-.007c-1.719-2.122-3.694-4.046-5.736-5.831l-3.916 3.038.546 19.217" /></svg>;

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
};
const CrestSouthampton = styled(Svg)<SvgProps>(({
  color,
  height,
  width,
  fontSize,
  theme
}) => ({ ...(color && {
    color: themed('color', color)(theme)
  }),
  height,
  width,
  fontSize
}));
CrestSouthampton.defaultProps = {
    
  };
export default CrestSouthampton;