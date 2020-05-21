import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const KnowledgeForm = () => {

    let location = useLocation();

	return (
        <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>
                    {location.pathname.includes('new') ? 'Create Profile' : 'Edit Profile'}
                </h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/admin/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Profile {location.pathname.includes('new') ? 'Create' : 'Edit'}</li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            {/* SELECT2 EXAMPLE */}
            <div className="card card-default">
              <div className="card-header">
                <h3 className="card-title">Select2 (Default Theme)</h3>
                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-card-widget="collapse"
                  >
                    <i className="fas fa-minus" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-card-widget="remove"
                  >
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Minimal</label>
                      <select
                        className="form-control select2"
                        style={{ width: "100%" }}
                      >
                        <option defaultValue="value">Alabama</option>
                        <option>Alaska</option>
                        <option>California</option>
                        <option>Delaware</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Washington</option>
                      </select>
                    </div>
                    {/* /.form-group */}
                    <div className="form-group">
                      <label>Disabled</label>
                      <select
                        className="form-control select2"
                        disabled="disabled"
                        style={{ width: "100%" }}
                      >
                        <option defaultValue="defaultValue">Alabama</option>
                        <option>Alaska</option>
                        <option>California</option>
                        <option>Delaware</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Washington</option>
                      </select>
                    </div>
                    {/* /.form-group */}
                  </div>
                  {/* /.col */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Multiple</label>
                      <select
                        className="select2"
                        multiple="multiple"
                        data-placeholder="Select a State"
                        style={{ width: "100%" }}
                      >
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option>California</option>
                        <option>Delaware</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Washington</option>
                      </select>
                    </div>
                    {/* /.form-group */}
                    <div className="form-group">
                      <label>Disabled Result</label>
                      <select
                        className="form-control select2"
                        style={{ width: "100%" }}
                      >
                        <option defaultValue="defaultValue">Alabama</option>
                        <option>Alaska</option>
                        <option disabled="disabled">California (disabled)</option>
                        <option>Delaware</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Washington</option>
                      </select>
                    </div>
                    {/* /.form-group */}
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
                <h5>Custom Color Variants</h5>
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Minimal (.select2-danger)</label>
                      <select
                        className="form-control select2 select2-danger"
                        data-dropdown-css-class="select2-danger"
                        style={{ width: "100%" }}
                      >
                        <option defaultValue="defaultValue">Alabama</option>
                        <option>Alaska</option>
                        <option>California</option>
                        <option>Delaware</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Washington</option>
                      </select>
                    </div>
                    {/* /.form-group */}
                  </div>
                  {/* /.col */}
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Multiple (.select2-purple)</label>
                      <div className="select2-purple">
                        <select
                          className="select2"
                          multiple="multiple"
                          data-placeholder="Select a State"
                          data-dropdown-css-class="select2-purple"
                          style={{ width: "100%" }}
                        >
                          <option>Alabama</option>
                          <option>Alaska</option>
                          <option>California</option>
                          <option>Delaware</option>
                          <option>Tennessee</option>
                          <option>Texas</option>
                          <option>Washington</option>
                        </select>
                      </div>
                    </div>
                    {/* /.form-group */}
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                Visit <Link to="https://select2.github.io/">Select2 documentation</Link>{" "}
                for more examples and information about the plugin.
              </div>
            </div>
            {/* /.card */}
            {/* SELECT2 EXAMPLE */}
            <div className="card card-default">
              <div className="card-header">
                <h3 className="card-title">Select2 (Bootstrap4 Theme)</h3>
                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-card-widget="collapse"
                  >
                    <i className="fas fa-minus" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-card-widget="remove"
                  >
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Minimal</label>
                      <select
                        className="form-control select2bs4"
                        style={{ width: "100%" }}
                      >
                        <option defaultValue="defaultValue">Alabama</option>
                        <option>Alaska</option>
                        <option>California</option>
                        <option>Delaware</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Washington</option>
                      </select>
                    </div>
                    {/* /.form-group */}
                    <div className="form-group">
                      <label>Disabled</label>
                      <select
                        className="form-control select2bs4"
                        disabled="disabled"
                        style={{ width: "100%" }}
                      >
                        <option defaultValue="defaultValue">Alabama</option>
                        <option>Alaska</option>
                        <option>California</option>
                        <option>Delaware</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Washington</option>
                      </select>
                    </div>
                    {/* /.form-group */}
                  </div>
                  {/* /.col */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Multiple</label>
                      <select
                        className="select2bs4"
                        multiple="multiple"
                        data-placeholder="Select a State"
                        style={{ width: "100%" }}
                      >
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option>California</option>
                        <option>Delaware</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Washington</option>
                      </select>
                    </div>
                    {/* /.form-group */}
                    <div className="form-group">
                      <label>Disabled Result</label>
                      <select
                        className="form-control select2bs4"
                        style={{ width: "100%" }}
                      >
                        <option defaultValue="defaultValue">Alabama</option>
                        <option>Alaska</option>
                        <option disabled="disabled">California (disabled)</option>
                        <option>Delaware</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Washington</option>
                      </select>
                    </div>
                    {/* /.form-group */}
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                Visit <Link to="https://select2.github.io/">Select2 documentation</Link>{" "}
                for more examples and information about the plugin.
              </div>
            </div>
            {/* /.card */}
            <div className="card card-default">
              <div className="card-header">
                <h3 className="card-title">Bootstrap Duallistbox</h3>
                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-card-widget="collapse"
                  >
                    <i className="fas fa-minus" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-card-widget="remove"
                  >
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <label>Multiple</label>
                      <select className="duallistbox" multiple="multiple">
                        <option defaultValue="defaultValue">Alabama</option>
                        <option>Alaska</option>
                        <option>California</option>
                        <option>Delaware</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Washington</option>
                      </select>
                    </div>
                    {/* /.form-group */}
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                Visit <Link to="https://select2.github.io/">Select2 documentation</Link>{" "}
                for more examples and information about the plugin.
              </div>
            </div>
            {/* /.card */}
            <div className="row">
              <div className="col-md-6">
                <div className="card card-danger">
                  <div className="card-header">
                    <h3 className="card-title">Input masks</h3>
                  </div>
                  <div className="card-body">
                    {/* Date dd/mm/yyyy */}
                    <div className="form-group">
                      <label>Date masks:</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="far fa-calendar-alt" />
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          data-inputmask-alias="datetime"
                          data-inputmask-inputformat="dd/mm/yyyy"
                          data-mask
                        />
                      </div>
                      {/* /.input group */}
                    </div>
                    {/* /.form group */}
                    {/* Date mm/dd/yyyy */}
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="far fa-calendar-alt" />
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          data-inputmask-alias="datetime"
                          data-inputmask-inputformat="mm/dd/yyyy"
                          data-mask
                        />
                      </div>
                      {/* /.input group */}
                    </div>
                    {/* /.form group */}
                    {/* phone mask */}
                    <div className="form-group">
                      <label>US phone mask:</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fas fa-phone" />
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          data-inputmask='"mask": "(999) 999-9999"'
                          data-mask
                        />
                      </div>
                      {/* /.input group */}
                    </div>
                    {/* /.form group */}
                    {/* phone mask */}
                    <div className="form-group">
                      <label>Intl US phone mask:</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fas fa-phone" />
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          data-inputmask="'mask': ['999-999-9999 [x99999]', '+099 99 99 9999[9]-9999']"
                          data-mask
                        />
                      </div>
                      {/* /.input group */}
                    </div>
                    {/* /.form group */}
                    {/* IP mask */}
                    <div className="form-group">
                      <label>IP mask:</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fas fa-laptop" />
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          data-inputmask="'alias': 'ip'"
                          data-mask
                        />
                      </div>
                      {/* /.input group */}
                    </div>
                    {/* /.form group */}
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
                <div className="card card-info">
                  <div className="card-header">
                    <h3 className="card-title">Color &amp; Time Picker</h3>
                  </div>
                  <div className="card-body">
                    {/* Color Picker */}
                    <div className="form-group">
                      <label>Color picker:</label>
                      <input type="text" className="form-control my-colorpicker1" />
                    </div>
                    {/* /.form group */}
                    {/* Color Picker */}
                    <div className="form-group">
                      <label>Color picker with addon:</label>
                      <div className="input-group my-colorpicker2">
                        <input type="text" className="form-control" />
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <i className="fas fa-square" />
                          </span>
                        </div>
                      </div>
                      {/* /.input group */}
                    </div>
                    {/* /.form group */}
                    {/* time Picker */}
                    <div className="bootstrap-timepicker">
                      <div className="form-group">
                        <label>Time picker:</label>
                        <div
                          className="input-group date"
                          id="timepicker"
                          data-target-input="nearest"
                        >
                          <input
                            type="text"
                            className="form-control datetimepicker-input"
                            data-target="#timepicker"
                          />
                          <div
                            className="input-group-append"
                            data-target="#timepicker"
                            data-toggle="datetimepicker"
                          >
                            <div className="input-group-text">
                              <i className="far fa-clock" />
                            </div>
                          </div>
                        </div>
                        {/* /.input group */}
                      </div>
                      {/* /.form group */}
                    </div>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col (left) */}
              <div className="col-md-6">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Date picker</h3>
                  </div>
                  <div className="card-body">
                    {/* Date range */}
                    <div className="form-group">
                      <label>Date range:</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="far fa-calendar-alt" />
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control float-right"
                          id="reservation"
                        />
                      </div>
                      {/* /.input group */}
                    </div>
                    {/* /.form group */}
                    {/* Date and time range */}
                    <div className="form-group">
                      <label>Date and time range:</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="far fa-clock" />
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control float-right"
                          id="reservationtime"
                        />
                      </div>
                      {/* /.input group */}
                    </div>
                    {/* /.form group */}
                    {/* Date and time range */}
                    <div className="form-group">
                      <label>Date range button:</label>
                      <div className="input-group">
                        <button
                          type="button"
                          className="btn btn-default float-right"
                          id="daterange-btn"
                        >
                          <i className="far fa-calendar-alt" /> Date range picker
                          <i className="fas fa-caret-down" />
                        </button>
                      </div>
                    </div>
                    {/* /.form group */}
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
                {/* iCheck */}
                <div className="card card-success">
                  <div className="card-header">
                    <h3 className="card-title">
                      iCheck Bootstrap - Checkbox &amp; Radio Inputs
                    </h3>
                  </div>
                  <div className="card-body">
                    {/* Minimal style */}
                    <div className="row">
                      <div className="col-sm-6">
                        {/* checkbox */}
                        <div className="form-group clearfix">
                          <div className="icheck-primary d-inline">
                            <input
                              type="checkbox"
                              id="checkboxPrimary1"
                              defaultChecked
                            />
                            <label htmlFor="checkboxPrimary1"></label>
                          </div>
                          <div className="icheck-primary d-inline">
                            <input type="checkbox" id="checkboxPrimary2" />
                            <label htmlFor="checkboxPrimary2"></label>
                          </div>
                          <div className="icheck-primary d-inline">
                            <input type="checkbox" id="checkboxPrimary3" disabled />
                            <label htmlFor="checkboxPrimary3">Primary checkbox</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        {/* radio */}
                        <div className="form-group clearfix">
                          <div className="icheck-primary d-inline">
                            <input
                              type="radio"
                              id="radioPrimary1"
                              name="r1"
                              defaultChecked
                            />
                            <label htmlFor="radioPrimary1"></label>
                          </div>
                          <div className="icheck-primary d-inline">
                            <input type="radio" id="radioPrimary2" name="r1" />
                            <label htmlFor="radioPrimary2"></label>
                          </div>
                          <div className="icheck-primary d-inline">
                            <input
                              type="radio"
                              id="radioPrimary3"
                              name="r1"
                              disabled
                            />
                            <label htmlFor="radioPrimary3">Primary radio</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Minimal red style */}
                    <div className="row">
                      <div className="col-sm-6">
                        {/* checkbox */}
                        <div className="form-group clearfix">
                          <div className="icheck-danger d-inline">
                            <input
                              type="checkbox"
                              defaultChecked
                              id="checkboxDanger1"
                            />
                            <label htmlFor="checkboxDanger1"></label>
                          </div>
                          <div className="icheck-danger d-inline">
                            <input type="checkbox" id="checkboxDanger2" />
                            <label htmlFor="checkboxDanger2"></label>
                          </div>
                          <div className="icheck-danger d-inline">
                            <input type="checkbox" disabled id="checkboxDanger3" />
                            <label htmlFor="checkboxDanger3">Danger checkbox</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        {/* radio */}
                        <div className="form-group clearfix">
                          <div className="icheck-danger d-inline">
                            <input
                              type="radio"
                              name="r2"
                              defaultChecked
                              id="radioDanger1"
                            />
                            <label htmlFor="radioDanger1"></label>
                          </div>
                          <div className="icheck-danger d-inline">
                            <input type="radio" name="r2" id="radioDanger2" />
                            <label htmlFor="radioDanger2"></label>
                          </div>
                          <div className="icheck-danger d-inline">
                            <input
                              type="radio"
                              name="r2"
                              disabled
                              id="radioDanger3"
                            />
                            <label htmlFor="radioDanger3">Danger radio</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Minimal red style */}
                    <div className="row">
                      <div className="col-sm-6">
                        {/* checkbox */}
                        <div className="form-group clearfix">
                          <div className="icheck-success d-inline">
                            <input
                              type="checkbox"
                              defaultChecked
                              id="checkboxSuccess1"
                            />
                            <label htmlFor="checkboxSuccess1"></label>
                          </div>
                          <div className="icheck-success d-inline">
                            <input type="checkbox" id="checkboxSuccess2" />
                            <label htmlFor="checkboxSuccess2"></label>
                          </div>
                          <div className="icheck-success d-inline">
                            <input type="checkbox" disabled id="checkboxSuccess3" />
                            <label htmlFor="checkboxSuccess3">Success checkbox</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        {/* radio */}
                        <div className="form-group clearfix">
                          <div className="icheck-success d-inline">
                            <input
                              type="radio"
                              name="r3"
                              defaultChecked
                              id="radioSuccess1"
                            />
                            <label htmlFor="radioSuccess1"></label>
                          </div>
                          <div className="icheck-success d-inline">
                            <input type="radio" name="r3" id="radioSuccess2" />
                            <label htmlFor="radioSuccess2"></label>
                          </div>
                          <div className="icheck-success d-inline">
                            <input
                              type="radio"
                              name="r3"
                              disabled
                              id="radioSuccess3"
                            />
                            <label htmlFor="radioSuccess3">Success radio</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer">
                    Many more skins available.{" "}
                    <Link to="https://bantikyan.github.io/icheck-bootstrap/">
                      Documentation
                    </Link>
                  </div>
                </div>
                {/* /.card */}
                {/* Bootstrap Switch */}
                <div className="card card-secondary">
                  <div className="card-header">
                    <h3 className="card-title">Bootstrap Switch</h3>
                  </div>
                  <div className="card-body">
                    <input
                      type="checkbox"
                      name="my-checkbox"
                      defaultChecked
                      data-bootstrap-switch
                    />
                    <input
                      type="checkbox"
                      name="my-checkbox"
                      defaultChecked
                      data-bootstrap-switch
                      data-off-color="danger"
                      data-on-color="success"
                    />
                  </div>
                </div>
                {/* /.card */}
              </div>
              {/* /.col (right) */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
	);
};

export default KnowledgeForm;