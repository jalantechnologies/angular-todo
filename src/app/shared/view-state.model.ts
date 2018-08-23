export class ViewStateModel<T> {
  isLoading: Boolean;
  isFinishedWithError: Boolean;
  isFinishedWithSuccess: Boolean;
  isActive: Boolean;
  data: T;
  error: Object;
  progress: Number;

  constructor() {
  }

  load() {
    this.reset();
    this.isLoading = true;
    this.isActive = true;
  }

  private finish() {
    if (!this.isActive) {
      throw new Error('Could not finish: State not active yet');
    }
    this.isLoading = false;
  }

  finishedWithSuccess(data?: T) {
    this.finish();
    this.isFinishedWithSuccess = true;
    this.data = data;
  }

  finishedWithError(error?) {
    this.finish();
    this.isFinishedWithError = true;
    this.error = error;
  }

  setProgress(progress: Number) {
    this.progress = progress;
  }

  reset() {
    this.data = null;
    this.error = null;
    this.isFinishedWithSuccess = false;
    this.isFinishedWithError = false;
    this.isLoading = false;
    this.isActive = false;
    this.progress = 0;
  }
}
