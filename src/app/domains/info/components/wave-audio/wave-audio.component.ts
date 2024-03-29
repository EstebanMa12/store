import { Component , ElementRef, Input, ViewChild, signal} from '@angular/core';


import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css'
})
export class WaveAudioComponent {
  // Para utilizar el componente de wavesurfer
  // Se debe utilizar el ngAfterViewInit
  // Para que el componente ya este renderizado
  // y pueda ser utilizado
  @Input({required: true}) audioUrl!: string;
  @ViewChild('wave') container!: ElementRef;
  private ws!: WaveSurfer;
  isPlaying = signal(false);

  ngAfterViewInit(){
    this.ws = WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement,
    });
    this.ws.on('play', () => this.isPlaying.set(true));
    this.ws.on('pause', () => this.isPlaying.set(false));
  }
  playPause(){
    this.ws.playPause();
  }
}
